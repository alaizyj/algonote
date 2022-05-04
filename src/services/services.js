import { users } from '../data/users';
const info = ({ value, withError } = {}) => {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    setTimeout(() => {
        if (withError) {
            reject({ error: withError });
        } else {
            resolve(value);
        }
    }, 2000);
    return promise;
};

const fetchRegister = (newUser) => {
    if (users[newUser.username]) {
        return info({ withError: 'Username exists, please try another!' });
    }
    return info({ value: 'Successfully registered' });
};

const fetchLogin = (loginUser) => {
    if (!users[loginUser.username]) {
        return info({ withError: 'No such a user!' });
    }
    if (loginUser.username === 'Jay') {
        return info({ withError: 'Wrong password!' });
    }
    return info({ value: users[loginUser.username] });
};

const validate = (user, register, note, contact) => {
    const errors = {};
    const regexName = /^[a-zA-Z ]{2,30}$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (user) {
        if (!user.username) {
            errors.username = 'Username is required!';
        }

        if (register) {
            if (!user.email) {
                errors.email = 'Email is required!';
            } else if (!regexEmail.test(user.email)) {
                errors.email = 'Invalid email format!';
            }
            if (user.password.length < 6) {
                errors.password = 'Minimum password length is 6!';
            }
        }
        if (!user.password) {
            errors.password = 'Password is required!';
        }
    }
    if (note) {
        if (!note.title) {
            errors.title = 'A title is required!';
        } else if (note.title.length > 30) {
            errors.title = 'Maximum length is 30!';
        }
        if (!note.tag) {
            errors.tag = 'A tag is required!';
        }
        if (!note.content) {
            errors.content = 'Please add some content!';
        } else if (note.content.length > 100) {
            errors.content = 'Maximum length is 100!';
        }
    }

    if (contact) {
        if (!contact.name) {
            errors.name = 'A name is required!';
        } else if (!regexName.test(contact.name)) {
            errors.name = 'Name is not valid!';
        }
        if (!contact.contactEmail) {
            errors.contactEmail = 'Email address is required!';
        } else if (!regexEmail.test(contact.contactEmail)) {
            errors.contactEmail = 'Email is not valid!';
        }
        if (!contact.subject) {
            errors.subject = 'A subject is required!';
        }
        if (!contact.message) {
            errors.message = 'Please leave a message!';
        }
    }
    return errors;
};

export { fetchLogin, fetchRegister, validate };