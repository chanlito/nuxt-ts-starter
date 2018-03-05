import 'dotenv/config';

import { ApplicationModule } from './app/app.module';
import { Bootstrap } from './lib/bootstrap';

(async () =>
  new Bootstrap({
    module: ApplicationModule
  }).main())().catch(e => {
  console.error(e);
  process.exit(1);
});
