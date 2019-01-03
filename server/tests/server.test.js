const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');

const { Todo } = require('./../models/todo');
const { User } = require('./../models/user');

beforeEach((done) => {
    Todo.deleteMany({}).then(() => done());
})

describe('POST /todos', () => {
    it('deve criar uma nova tarefa', (done) => {
        var text = 'Teste de tarefa'
        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => expect(res.body.text).toBe('Teste de tarefa'))
            .end((err, res) => {
                if (err) return done(err);
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done()
                }).catch((e) => done(e))
            });
    });

    it('não deve criar tarefa com informações erradas', (done) => {
        var text = ""
        request(app)
            .post('/todos')
            .send({text})
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(0);
                    done();
                }).catch((err) => done(err));
            });
        });
});