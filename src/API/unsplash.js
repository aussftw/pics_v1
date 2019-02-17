import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID 71a3d05390572a4b903a34bec999e8278afcb2ecfa59b7390cc5cc00e4b3ab02'
  } 
});

