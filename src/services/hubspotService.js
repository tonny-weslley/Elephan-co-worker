import axios from "axios";
import { Client } from "@hubspot/api-client";
import { excludeSamples } from '../utils/index.js';

const BaseURL = 'https://api.hubapi.com';

class HubspotService {
  constructor(marketingServiceToken) {
    this.hubspotClient = new Client({ accessToken: marketingServiceToken });
    this.hubspotAxiosClient = axios.create({
      baseURL: BaseURL,
      headers: {
        Authorization: `Bearer ${marketingServiceToken}`,
      },
    });
  }

  async getAllEngagements() {
    try {
      const response = await this.hubspotAxiosClient.get(`engagements/v1/engagements/paged`);
      let data = response.data;
      data = excludeSamples(data);
      return data;
    } catch (error) {
      console.error("Error fetching engagements:", error);
      throw error;
    }
  }

  async getBusinessData() {
    console.log('Getting business data from hubspot');
    try {
      const [
        engagementsResponse,
        contactsResponse,
        dealsResponse
      ] = await Promise.all([
        this.getAllEngagements(),
        this.hubspotClient.crm.contacts.basicApi.getPage(100),
        this.hubspotClient.crm.deals.basicApi.getPage(100)
      ]);

      return {
        contacts: contactsResponse.results,
        engagements: engagementsResponse.results,
        deals: dealsResponse.results
      };
    } catch (error) {
      console.error("Error fetching business data:", error);
      throw error;
    }
  }
}

export default HubspotService;
