import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Cet Email est déjà enregistré"],
        required: [true, "L'email est obligatoire"]
    },
    username: {
        type: String,
        required: [true, "Le nom d'utilisateur est obligatoire"],
        // match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, la longueur de l'identifiant doit contenir entre 8 et 20 caractères et ne doit pas contenir de caractères _."]
        // match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
});

const User = models.User || model("User", UserSchema);

export default User;