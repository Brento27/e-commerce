import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@exapmle.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@exapmle.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jane Doe',
        email: 'jane@exapmle.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Brent Lombaard',
        email: 'brent@exapmle.com',
        password: bcrypt.hashSync('020223', 10)
    }
]

export default users