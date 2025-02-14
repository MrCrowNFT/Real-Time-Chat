import mongoose from "mongoose";
import bcrypt from "bcrypt";

const accountSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    //need to validate email
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

accountSchema.pre("save", async function (next) {
  try {
    //only hash the password if is modified/new
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.get('password'), 10);
  } catch (error) {
    next(error as Error);
  }
});

accountSchema.methods.comparePassword = async function (
  enteredPassword: string
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Account = mongoose.model("Account", accountSchema);
export default Account;
