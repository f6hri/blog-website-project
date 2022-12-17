import { MongooseModule } from '@nestjs/mongoose';

const connection = () => {
  MongooseModule.forRoot(process.env.CONNECTION_URL);
};

export default connection;
