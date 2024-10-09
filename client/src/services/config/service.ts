import { AxiosInstance } from "axios";
import httpClient from "./httpClient";

abstract class Service{
  protected httpClient: AxiosInstance
  
  constructor(){
    this.httpClient = httpClient
  }
}

export default Service
