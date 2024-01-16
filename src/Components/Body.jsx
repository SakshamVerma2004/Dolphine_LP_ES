import styles from "../Styles/Body.module.css";
import gridBg from "../Assets/grid-background-image.webp";
import grid1 from "../Assets/grid-1.png";
import grid2 from "../Assets/grid-2.png";
import grid3 from "../Assets/grid-3.png";
import brochureBg from "../Assets/downloadBrochureBg.jpg";
import whyChooseImage from "../Assets/whychooseusImage.jpg";
import journeyBg from "../Assets/journeyBg.jpg";
import demoClasses from "../Assets/demoClassesImg.jpg";
import redTick from "../Assets/check-mark-svgrepo-com.svg";
import festiveImg from "../Assets/festiveSeasonImg.jpg";
import slider1 from "../Assets/sliderImg1.jpg";
import slider2 from "../Assets/sliderImg2.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import DHHBrochure from "../Assets/DHHBrochure.pdf";
let Body = () => {
  let [showAnswer1, setShowAnswer1] = useState(false);
  let [showAnswer2, setShowAnswer2] = useState(false);
  let [showAnswer3, setShowAnswer3] = useState(false);
  let [showAnswer4, setShowAnswer4] = useState(false);
  let [showAnswer5, setShowAnswer5] = useState(false);
  let [showAnswer6, setShowAnswer6] = useState(false);
  let [showAnswer7, setShowAnswer7] = useState(false);
  let [sliderImage, setSliderImage] = useState(slider1);
  let [imageChanged, setImageChanged] = useState(false);
  let { showForm, setShowForm, showForm2, setShowForm2 } =
    useContext(AuthContext);
  let [formSubmitted, setFormSubmitted] = useState(false);
  let [formSubmitted2, setFormSubmitted2] = useState(false);
  let [formSubmitted3, setFormSubmitted3] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [showSuccess, setShowSuccess] = useState(false);
  let [showError, setShowError] = useState(false);
  let [name2, setName2] = useState("");
  let [email2, setEmail2] = useState("");
  let [phoneNumber2, setPhoneNumber2] = useState("");
  let [showSuccess2, setShowSuccess2] = useState(false);
  let [showError2, setShowError2] = useState(false);
  let [name3, setName3] = useState("");
  let [email3, setEmail3] = useState("");
  let [phoneNumber3, setPhoneNumber3] = useState("");
  let [showSuccess3, setShowSuccess3] = useState(false);
  let [showError3, setShowError3] = useState(false);
  let [name4, setName4] = useState("");
  let [email4, setEmail4] = useState("");
  let [phoneNumber4, setPhoneNumber4] = useState("");
  let [showSuccess4, setShowSuccess4] = useState(false);
  let [showError4, setShowError4] = useState(false);
  // useEffect(() => {
  //   if (sliderImage == slider1) {
  //     setTimeout(() => {
  //       setSliderImage(slider2);
  //       setImageChanged(true);
  //     }, 5000);
  //   } else {
  //     setTimeout(() => {
  //       setSliderImage(slider1);
  //       setImageChanged(true);
  //     }, 5000);
  //   }
  //   if (imageChanged) {
  //     setTimeout(() => {
  //       setImageChanged(false);
  //     }, 4000);
  //   }
  // }, [sliderImage, imageChanged]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setSliderImage((prevImage) =>
        prevImage === slider1 ? slider2 : slider1
      );
      setImageChanged(true);
    }, 5000);
    let resetAnimation = () => {
      setImageChanged(false);
    };
    let animationTimeout = setTimeout(resetAnimation, 4000);
    return () => {
      clearInterval(intervalId);
      clearTimeout(animationTimeout);
    };
  }, []);
  let submitHandler = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phoneNumber.trim()) {
      return;
    }
    fetch(
      "https://dhh-lp-default-rtdb.firebaseio.com/english_speaking/data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          date: new Date().toDateString(),
          time_HH_MM_SS: new Date().toLocaleTimeString(),
        }),
      }
    )
      .then((res) => {
        setShowSuccess(true);
        setFormSubmitted2(true);
        return res.json();
      })
      .catch((err) => {
        if (err) {
          setShowError(true);
        }
      });
  };
  let submitHandler2 = (e) => {
    e.preventDefault();
    if (!name2.trim() || !email2.trim() || !phoneNumber2.trim()) {
      return;
    }
    fetch(
      "https://dhh-lp-default-rtdb.firebaseio.com/english_speaking/data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name2,
          email: email2,
          phoneNumber: phoneNumber2,
          date: new Date().toDateString(),
          time_HH_MM_SS: new Date().toLocaleTimeString(),
        }),
      }
    )
      .then((res) => {
        setShowSuccess2(true);
        return res.json();
      })
      .catch((err) => {
        if (err) {
          setShowError2(true);
        }
      });
  };
  let submitHandler3 = (e) => {
    e.preventDefault();
    if (!name3.trim() || !phoneNumber3.trim()) {
      return;
    }
    fetch(
      "https://dhh-lp-default-rtdb.firebaseio.com/english_speaking/data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name3,
          phoneNumber: phoneNumber3,
          date: new Date().toDateString(),
          time_HH_MM_SS: new Date().toLocaleTimeString(),
        }),
      }
    )
      .then((res) => {
        setShowSuccess3(true);
        setFormSubmitted3(true);
        return res.json();
      })
      .catch((err) => {
        if (err) {
          setShowError3(true);
        }
      });
  };
  let submitHandler4 = (e) => {
    e.preventDefault();
    if (!name4.trim() || !phoneNumber4.trim()) {
      return;
    }
    fetch(
      "https://dhh-lp-default-rtdb.firebaseio.com/english_speaking/data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name4,
          phoneNumber: phoneNumber4,
          date: new Date().toDateString(),
          time_HH_MM_SS: new Date().toLocaleTimeString(),
        }),
      }
    )
      .then((res) => {
        setShowSuccess4(true);
        setFormSubmitted(true);
        return res.json();
      })
      .catch((err) => {
        if (err) {
          setShowError4(true);
        }
      });
  };
  return (
    <div className={styles.body}>
      <div className={styles.slider} id="home">
        <div
          className={styles.backgroundImageSliderSection}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(30, 30, 30,0.7), rgba(30, 30, 30,0.7)), url(${sliderImage})`,
          }}
        ></div>
        <div className={styles.containerSlider}>
          <div className={styles.sliderHeadingSection}>
            <h1>
              Boost Your English Speaking Skills With Dolphin Head Hunters
            </h1>
            <p>
              We are all aware that language is the primary means of
              communication. It is a way through which we humans can communicate
              our thoughts and ideas.
            </p>
          </div>
          <div className={styles.sliderBrochureSection}>
            {!formSubmitted2 ? (
              <div>
                <h2>Download Brochure</h2>
                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {!showError ? (
                  <input
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    type="number"
                  />
                ) : (
                  <p
                    style={{
                      color: "red",
                      fontSize: "13px",
                      textAlign: "center",
                    }}
                  >
                    Something Went Wrong , Please try again later.
                  </p>
                )}
                {!showSuccess ? (
                  <button className={styles.submitBtn} onClick={submitHandler}>
                    SUBMIT NOW
                  </button>
                ) : (
                  <p
                    style={{
                      color: "green",
                      fontSize: "13px",
                      textAlign: "center",
                    }}
                  >
                    Form Submitted Successfully.
                  </p>
                )}
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: "100px",
                }}
              >
                <a
                  onClick={() =>
                    setTimeout(() => {
                      setFormSubmitted2(false);
                    }, 5000)
                  }
                  href={DHHBrochure}
                  download={true}
                  style={{
                    textAlign: "center",
                    color: "green",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  Download Now
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={styles.gridSection}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(254, 205, 165, 0.3), rgba(254, 205, 165, 0.3)), url(${gridBg})`,
        }}
      >
        <div className={styles.containerGridSection}>
          <div>
            <img src={grid1} />
            <h3>Learn Skills</h3>
            <p>with unlimited courses</p>
          </div>
          <div>
            <img src={grid2} />
            <h3>Expert Trainer</h3>
            <p>best & highly qualified</p>
          </div>
          <div>
            <img src={grid3} />
            <h3>Get Certificate</h3>
            <p>value all over the world</p>
          </div>
        </div>
      </div>
      <div
        className={styles.downloadBrochureSection}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255,0.9), rgba(255, 255, 255,0.9)), url(${brochureBg})`,
        }}
      >
        <div className={styles.containerDownloadBrochureSection}>
          <h1>
            Download Free{" "}
            <span className={styles.brochureText}>
              <span className={styles.animationB}>B</span>
              <span className={styles.animationr}>r</span>
              <span className={styles.animationo}>o</span>
              <span className={styles.animationc}>c</span>
              <span className={styles.animationh}>h</span>
              <span className={styles.animationu}>u</span>
              <span className={styles.animationr2}>r</span>
              <span className={styles.animatione}>e</span>
            </span>
          </h1>
          {!formSubmitted3 ? (
            <div style={{ width: "100%", textAlign: "center" }}>
              <input
                placeholder="Enter Your Name"
                value={name3}
                onChange={(e) => setName3(e.target.value)}
                required
              />
              {!showError3 ? (
                <input
                  placeholder="Enter Your Number"
                  value={phoneNumber3}
                  onChange={(e) => setPhoneNumber3(e.target.value)}
                  type="number"
                  required
                />
              ) : (
                <p
                  style={{
                    color: "red",
                    fontSize: "13px",
                    textAlign: "center",
                  }}
                >
                  Something Went Wrong, please try again later.
                </p>
              )}
              {!showSuccess3 ? (
                <button
                  className={styles.downloadBrochureBtn}
                  onClick={submitHandler3}
                >
                  DOWNLOAD BROCHURE
                </button>
              ) : (
                <p
                  style={{
                    color: "green",
                    fontSize: "13px",
                    textAlign: "center",
                  }}
                >
                  Form Submitted Successfully.
                </p>
              )}
              <p className={styles.agreePara}>
                I agree to ielts terms and privacy policy
              </p>
            </div>
          ) : (
            <a
              href={DHHBrochure}
              download={true}
              style={{
                color: "green",
                fontSize: "20px",
                textDecoration: "none",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setTimeout(() => {
                  setFormSubmitted3(false);
                  setShowSuccess3(true);
                }, 2000);
              }}
            >
              Download Now
            </a>
          )}
        </div>
      </div>
      <div className={styles.callNowSection}>
        <div className={styles.containerCallNowSection}>
          <div className={styles.callNowHeadingSection}>
            <h4>Want to unveil new beginnings?</h4>
            <h4>Call us at 9780754465 today!</h4>
          </div>
          <button className={styles.callNowBtn}>
            <a href="tel:9780754465">CALL NOW</a>
          </button>
        </div>
      </div>
      <div className={styles.whyChooseSection} id="whychooseus">
        <div className={styles.containerWhyChooseSection}>
          <div className={styles.whyChooseHeadingSection}>
            <h5>WHY CHOOSE US</h5>
            <h3>
              English Speaking Skills With Best Spoken English Centre in
              Chandigarh
            </h3>
            <p>
              Do you find it difficult to achieve your goals owing to a lack of
              English communication skills? You don’t need to be concerned
              because the most professional courses offered by the spoken
              English institute in Chandigarh may help you soar to success.
              Enroll in our classes to improve your communication skills from
              all aspects of it. Choose the course that is best for you and
              learn from experienced English teachers with internationally
              recognised credentials.
            </p>
          </div>
          <div className={styles.whyChooseImageSection}>
            <img src={whyChooseImage} />
            <div className={styles.bestSection}>
              <h3>WE'RE THE BEST INSTITUTION</h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.startJourneySection}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(30, 30, 30,0.7), rgba(30, 30, 30,0.7)), url(${journeyBg})`,
        }}
      >
        <div className={styles.containerStartJourneySection}>
          <div className={styles.headingStartJourneySection}>
            <h3>Start Your Journey With Dolphin Head Hunters Today!</h3>
          </div>
          <button
            className={styles.joinNowButton}
            onClick={() => setShowForm2(true)}
          >
            JOIN NOW
          </button>
        </div>
      </div>
      <div className={styles.demoClassesSection} id="about">
        <div className={styles.containerDemoClassesSection}>
          <div className={styles.demoClassesImageSection}>
            <img src={demoClasses} />
          </div>
          <div className={styles.demoClassesTextSection}>
            <h1>
              How We Prepare Aspirants For Increasing Their Spoken English
              Skills
            </h1>
            <p className={styles.mainParaDemoClasses}>
              Not only does the study material that is given to the students
              matter but it is also the method and kind of teaching that helps
              them to grasp each and every detail properly. Especially when it
              comes to teaching a language that is spoken on a global level,
              ignoring the minor points aren’t acceptable from our end.
            </p>
            <div className={styles.checkboxParaSection}>
              <div className={styles.redCheckbox}>
                <img src={redTick} />
              </div>
              <p>
                The problem of poor knowledge of grammar and incorrect sentence
                formation will be completely eradicated from its very root.
              </p>
            </div>
            <div className={styles.checkboxParaSection}>
              <div className={styles.redCheckbox}>
                <img src={redTick} />
              </div>
              <p>
                Advanced grammar will be taught for the usage of complex
                sentences.
              </p>
            </div>
            <div className={styles.checkboxParaSection}>
              <div className={styles.redCheckbox}>
                <img src={redTick} />
              </div>
              <p>
                Proper usage of idiomatic phrases will be told and taught in a
                very strategic manner.
              </p>
            </div>
            <div className={styles.checkboxParaSection}>
              <div className={styles.redCheckbox}>
                <img src={redTick} />
              </div>
              <p>
                We’ll make sure that you will get fair knowledge of vocabulary.
              </p>
            </div>
            <button
              className={styles.registerButton}
              onClick={() => setShowForm(true)}
            >
              Register for Demo Class
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.downloadBrochureSection}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255,0.9), rgba(255, 255, 255,0.9)), url(${brochureBg})`,
        }}
      >
        <div className={styles.containerDownloadBrochureSection}>
          <h1 className={styles.reserveConsultation}>
            Reserve Your Free{" "}
            <span className={styles.brochureText}>
              <span className={styles.animationB}>C</span>
              <span className={styles.animationB}>o</span>
              <span className={styles.animationB}>n</span>
              <span className={styles.animationB}>s</span>
              <span className={styles.animationB}>u</span>
              <span className={styles.animationB}>l</span>
              <span className={styles.animationB}>t</span>
              <span className={styles.animationB}>a</span>
              <span className={styles.animationB}>t</span>
              <span className={styles.animationB}>i</span>
              <span className={styles.animationB}>o</span>
              <span className={styles.animationB}>n</span>
            </span>{" "}
            Slot
          </h1>
          <input
            placeholder="Enter Your Name"
            value={name4}
            onChange={(e) => setName4(e.target.value)}
            required
          />
          {!showError4 ? (
            <input
              placeholder="Enter Your Number"
              value={phoneNumber4}
              onChange={(e) => setPhoneNumber4(e.target.value)}
              type="number"
              required
            />
          ) : (
            <p style={{ color: "red", fontSize: "13px", textAlign: "center" }}>
              Something Went Wrong, please try again later.
            </p>
          )}
          {!showSuccess4 ? (
            <button
              className={styles.downloadBrochureBtn}
              onClick={submitHandler4}
            >
              REQUEST CALLBACK
            </button>
          ) : (
            <p
              style={{ color: "green", fontSize: "13px", textAlign: "center" }}
            >
              Form Submitted Successfully.
            </p>
          )}
          <p className={styles.agreePara}>
            I agree to ielts terms and privacy policy
          </p>
        </div>
      </div>
      <div className={styles.frequentlyAskedQuestion}>
        <h3>Frequently Asked Questions</h3>
        <div className={styles.questionParentSection}>
          <div
            className={styles.questionDiv}
            onClick={() => setShowAnswer1(!showAnswer1)}
          >
            <div className={styles.plusSymbol1}></div>
            {!showAnswer1 ? <div className={styles.plusSymbol2}></div> : null}
            <h4>How can I improve my English?</h4>
          </div>
          {showAnswer1 ? (
            <div className={styles.answerDiv}>
              <p>
                To improve your English you have to learn grammar rules,
                practice vocabulary, punctuation, nouns, pronouns etc and have
                to do self-study or you can join any English institute to
                improve your English.
              </p>
            </div>
          ) : null}
          <div
            className={styles.questionDiv}
            onClick={() => setShowAnswer2(!showAnswer2)}
          >
            <div className={styles.plusSymbol1}></div>
            {!showAnswer2 ? <div className={styles.plusSymbol2}></div> : null}
            <h4>Is learning English difficult?</h4>
          </div>
          {showAnswer2 ? (
            <div className={styles.answerDiv}>
              <p>
                Yes sometimes because English is not our first language but It
                also depends on the learner how easily one can pick up the
                grammar, tensens and other important factors of English.
              </p>
            </div>
          ) : null}
          <div
            className={styles.questionDiv}
            onClick={() => setShowAnswer3(!showAnswer3)}
          >
            <div className={styles.plusSymbol1}></div>
            {!showAnswer3 ? <div className={styles.plusSymbol2}></div> : null}
            <h4>Do I have to learn English grammar?</h4>
          </div>
          {showAnswer3 ? (
            <div className={styles.answerDiv}>
              <p>
                Yes! Grammar is the basis of the English language so you have to
                learn all grammar rules, vocabulary, tenses, adverbs, nouns and
                you have to practice daily to clear your grammar basics.
              </p>
            </div>
          ) : null}
          <div
            className={styles.questionDiv}
            onClick={() => setShowAnswer4(!showAnswer4)}
          >
            <div className={styles.plusSymbol1}></div>
            {!showAnswer4 ? <div className={styles.plusSymbol2}></div> : null}
            <h4>How long will it take me to learn English?</h4>
          </div>
          {showAnswer4 ? (
            <div className={styles.answerDiv}>
              <p>
                It depends on your learning and adapting skills. You have to
                practice daily for fast grabbing and you also should be curious
                to learn the language.
              </p>
            </div>
          ) : null}
          <div
            className={styles.questionDiv}
            onClick={() => setShowAnswer5(!showAnswer5)}
          >
            <div className={styles.plusSymbol1}></div>
            {!showAnswer5 ? <div className={styles.plusSymbol2}></div> : null}
            <h4>
              Will I get a certificate after completing an English-speaking
              course?
            </h4>
          </div>
          {showAnswer5 ? (
            <div className={styles.answerDiv}>
              <p>
                Yes, you get a certificate after you complete your spoken
                English course.
              </p>
            </div>
          ) : null}
          <div
            className={styles.questionDiv}
            onClick={() => setShowAnswer6(!showAnswer6)}
          >
            <div className={styles.plusSymbol1}></div>
            {!showAnswer6 ? <div className={styles.plusSymbol2}></div> : null}
            <h4>Who and How can I enroll for spoken English classes?</h4>
          </div>
          {showAnswer6 ? (
            <div className={styles.answerDiv}>
              <p>
                First, you have to check the best institute in your area then
                enroll yourself online or directly by contacting the institute.
                In the online method, you go to the site and register yourself
                cash or online both payments are available.
              </p>
            </div>
          ) : null}
          <div
            className={styles.questionDiv}
            onClick={() => setShowAnswer7(!showAnswer7)}
          >
            <div className={styles.plusSymbol1}></div>
            {!showAnswer7 ? <div className={styles.plusSymbol2}></div> : null}
            <h4>
              Why join Dolphin Head Hunters for Spoken English training classes?
            </h4>
          </div>
          {showAnswer7 ? (
            <div className={styles.answerDiv}>
              <p>
                Dolphin Institute is one of the best institutes in Chandigarh
                well-qualified trainer and the environment of the institute is
                very fresh and learning all facilities are available here:-
              </p>
              <ul style={{ marginLeft: "30px", marginTop: "10px" }}>
                <li>Personal attention</li>
                <li>Good learning environment</li>
                <li>Professional and highly educated staff</li>
                <li>Small Batches</li>
                <li>Flexible Timing</li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.festiveSeasonSection}>
        <div className={styles.containerFestiveSeasonSection}>
          <div className={styles.festiveSeasonHeadingBlock}>
            <h2>Festive Season Offer</h2>
            <div className={styles.uptoSection}>
              <div></div>
              <h3>UPTO</h3>
              <div></div>
            </div>
            <h1 className={styles.twentyPercentHeading}>20% OFF</h1>
            <h3>SUBMIT AND GET YOUR SPECIAL DISCOUNT</h3>
            <button
              className={styles.registerForDemoBtn}
              onClick={() => setShowForm(true)}
            >
              Register for Demo Class
            </button>
          </div>
          <div className={styles.festiveSeasonImageBlock}>
            <img src={festiveImg} />
          </div>
        </div>
      </div>
      <div className={styles.registerNowSection} id="contact">
        <div className={styles.containerRegisterNowSection}>
          <h1>REGISTER NOW</h1>
          <input
            placeholder="Name"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
          />
          {!showError2 ? (
            <input
              placeholder="Phone Number"
              value={phoneNumber2}
              onChange={(e) => setPhoneNumber2(e.target.value)}
              type="number"
              required
            />
          ) : (
            <p
              style={{ color: "black", fontSize: "13px", textAlign: "center" }}
            >
              Something Went Wrong, please try again later.
            </p>
          )}
          {!showSuccess2 ? (
            <button className={styles.submitNowBtn} onClick={submitHandler2}>
              SUBMIT NOW
            </button>
          ) : (
            <p
              style={{ color: "white", fontSize: "13px", textAlign: "center" }}
            >
              Form Submitted Successfully.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
