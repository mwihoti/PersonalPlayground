import { factory } from '@findhow/zod-factory';
import AnimalSchema from './animal.schema';
import { isDirty } from "zod";

const AnimalFactory  = factory(AnimalSchema, (faker) => ({
    id: faker.string.uuid(),
    owner: faker.person.fullName(),
    animal: faker.animal.cat(),
}
));

export default AnimalFactory;