import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "@/components/RegisterForm";

const Register = () => {
  const navigate = useNavigate();
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    // Clear previous errors
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Demo validation
    let hasErrors = false;

    if (data.firstName.length < 2) {
      setFirstNameError("First name must be at least 2 characters");
      hasErrors = true;
    }

    if (data.lastName.length < 2) {
      setLastNameError("Last name must be at least 2 characters");
      hasErrors = true;
    }

    if (!data.email.includes("@")) {
      setEmailError("Please enter a valid email address");
      hasErrors = true;
    }

    if (data.password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      hasErrors = true;
    }

    if (data.password !== data.confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      hasErrors = true;
    }

    // Check for duplicate email (demo)
    if (data.email === "existing@example.com") {
      setEmailError("This email is already registered");
      hasErrors = true;
    }

    if (hasErrors) {
      setIsLoading(false);
      return;
    }

    // Successful registration simulation
    console.log("Registration successful:", data);
    setIsLoading(false);
    navigate("/login");
  };

  const handleTermsClick = () => {
    console.log("Terms of Service clicked");
    // navigate("/terms");
  };

  const handlePrivacyClick = () => {
    console.log("Privacy Policy clicked");
    // navigate("/privacy");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <RegisterForm
        onRegister={handleRegister}
        onTermsClick={handleTermsClick}
        onPrivacyClick={handlePrivacyClick}
        firstNameError={firstNameError}
        lastNameError={lastNameError}
        emailError={emailError}
        passwordError={passwordError}
        confirmPasswordError={confirmPasswordError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Register;
