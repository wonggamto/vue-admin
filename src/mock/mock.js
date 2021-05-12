import Mock from 'mockjs'

const loginData = function (value) {
    console.log('mock:')
    console.log(value)
    return {token: 'admin123456'}
}

Mock.mock('http://localhost:8080/login', 'post', loginData)
export default Mock