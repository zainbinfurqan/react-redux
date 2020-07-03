
let api = {};

api.Login = async function (body = null, autherization = null) {
    if (body.email == 'zain' && body.password == '123') {
        return { status: 200, name: 'zain', phone: '0212343241234', token: '237fjkbr7123fluqwefyc2ylg' }
    } else {
        return { status: 400, message: 'invalide' }
    }

}

export default api