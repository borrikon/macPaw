import { main_store } from './main_store'


test('should get categiry info', ()=>{
    expect(main_store.getCategories()).resolves
})
test('should get randon joke', ()=>{
    expect(main_store.getRandomJoke()).resolves
})
test('should return list of joke by text search', ()=>{
    expect(main_store.getJokeBySearchField('fine')).resolves
})