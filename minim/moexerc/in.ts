interface Entity {
  id: number;
}

function createEntity(id: number): Entity {
  return { id };
}

const entity = createEntity(1);
