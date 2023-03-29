import React from 'react'
import './RightSide.css'
import { FcGoogle } from "react-icons/fc";
import{GrApple} from 'react-icons/gr'
export default function RightSide() {
  return (
    <div className="RightSideClass">
      <div className="Box">
        <p className="NewOnTweeterText">New to Twitter?</p>
        <p className="NewOnTweeterSubText">
          Sign up now to get your own personalized timeline!
        </p>

        <div className="SignBtm">
          <FcGoogle className="GoogleIcon"></FcGoogle>
          <p>Signup With Google</p>
        </div>

        <div className="SignBtm">
          <GrApple className="GoogleIcon"></GrApple>
          <p>Signup With Apple</p>
        </div>
        <div className="SignBtm">
          <p>Create account</p>
        </div>
        <p className="FooterText">
          By signing up, you agree to the<p> Terms of Service</p> and{" "}
          <p>Privacy Policy</p>, including <p>Cookie Use</p>
        </p>
      </div>
      <div className="SmallDialog">
        <p>Terms of Service</p>
        <p>Privacy Policy </p>
        <p>Cookie Policy</p>
        <p>Accessibility </p>
        <p>Ads info </p>
        <p>More..</p>
      </div>
    </div>
  );
}
