import axios from 'axios'
import type { AxiosResponse, AxiosInstance } from 'axios'
import data from './data.json'

const HOLODEX_URL = 'https://holodex.net/api/v2/'
const HOLODEX_KEY = '5eb3d9bc-0671-4a14-8f14-3fc2afe2ac91'

const holodexClient: AxiosInstance = axios.create({
  baseURL: HOLODEX_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': HOLODEX_KEY
  }
})

// Define a generic type for API responses
type ApiResponse<T> = {
  data: T
}

// Generic function to fetch data from the API
async function getData<T>(
  client: AxiosInstance,
  endpoint: string,
  params?: Record<string, any>
): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await client.get(endpoint, { params })
    return { data: response.data }
  } catch (error) {
    console.error('error:', error)
    throw error
  }
}

// Function to get live status from Holodex
export async function getLiveStatus(): Promise<ApiResponse<any>> {
  const channelIds = data.IDs.join(',')
  const queryParams = {
    channels: channelIds
  }
  return await getData<any>(holodexClient, '/users/live', queryParams)
}

// Function to get all kinds of music
export async function getMusic(channelId: string, topic: string): Promise<ApiResponse<any>> {
  const queryParams = {
    channel_id: channelId,
    topic: topic,
    include: 'songs'
  }
  return await getData<any>(holodexClient, '/videos', queryParams)
}

//get latest videos
export async function getVideos(channelId: string): Promise<ApiResponse<any>> {
  const queryParams = {
    channel_id: channelId,
    type: 'stream',
    status: 'past',
    limit: 1
  }
  return await getData<any>(holodexClient, '/videos', queryParams)
}

export { getData }
