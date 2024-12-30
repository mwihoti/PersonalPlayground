import { factory } from '@findhow/zod-factory';
import AnimalSchema from './animal.schema.ts';
import PersonalDetailSchema from "./personal-details.schema.ts";


const AnimalFactory  = factory(AnimalSchema, (faker) => ({
    id: faker.string.uuid(),
    owner: faker.person.fullName(),
    animal: faker.animal.cat(),
}
));

const PersonalDetailFactory = factory(PersonalDetailSchema, (faker) => ({
    id: faker.number.int(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }));

  const factoryAnimals = AnimalFactory.createMany(100);
  const factoryPeople = PersonalDetailFactory.createMany(100);
  
  export { AnimalFactory, factoryAnimals, factoryPeople, PersonalDetailFactory };