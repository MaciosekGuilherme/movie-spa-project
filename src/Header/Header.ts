import dotenv from 'dotenv';

dotenv.config();

const token = process.env.API_TOKEN;

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: token
  }
};
