export const login = async (_, { email, password }) => {
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error('eamil and passwor incorrect');
        }
        const hashPass = await bcrypt.compare(password, user?.password);
        if (!hashPass) {
            throw new Error('eamil and passwor incorrect');
        }
        var token = jwt.sign({
            email: user.email,
            fullName: user.fullName,
            token,
        }, 'jamiljdjdjd');
        return token;
    }
    catch (error) {
        console.log(error);
    }
};
