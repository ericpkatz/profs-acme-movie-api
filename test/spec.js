const { expect } = require('chai');
const db = require('../db');

describe('addition', ()=> {
  describe('1 + 1', ()=> {
    it('equals 3', ()=> {
      expect(1 + 1).to.equal(2);
    });
  });
});

describe('My App', ()=> {
  beforeEach(async()=> {
    await db.syncAndSeed();
  });
  it('can sync', ()=> {

  });
  it('there are 5 actors', async()=> {
    const actors = await db.models.Actor.findAll();
    expect(actors.length).to.equal(5);

  });
});
