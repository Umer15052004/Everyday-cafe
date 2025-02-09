const validationRules = {
    name: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]*$/
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phone: {
        required: true,
        pattern: /^\+?[\d\s-]{10,}$/
    },
    message: {
        required: true,
        pattern: /^[a-zA-Z\s]*$/
    }
};