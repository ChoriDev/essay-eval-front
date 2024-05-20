import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { Form, Button } from "react-bootstrap";
import { write, evaluate } from "../redux/slices/essay";
import Navbars from "../components/Navbars";
import useAxios from "../hooks/useAxios";
import styles from "../css/Result.module.css";
import backIcon from "../images/backIcon.png";
import printIcon from "../images/printIcon.png";

function Result() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const essay = useSelector((state) => state.essay);

  const [feedback, setFeedback] = useState(essay.feedback);

  const componentRef = useRef();

  const { responseData, error, isLoading, request } = useAxios({
    method: "GET",
    url: `api/result/`,
  });

  useEffect(() => {
    if (responseData !== null) {
      setFeedback(responseData.feedback);
      dispatch(evaluate({ feedback: responseData.feedback }));
      navigate(`/result`);
    }
  }, [responseData, dispatch, navigate]);



  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "EssayEval 채점 결과",
  });

  return (
    <>
      <Navbars />
      <div className={styles.container}>
        <Form>
          <div className={styles.printArea} ref={componentRef}>
            <Form.Group className={styles.textBox}>
              <Form.Label>에세이 채점 결과</Form.Label>
              <Form.Control
                className={styles.textArea}
                as="textarea"
                value={feedback}
                rows={15}
                maxLength={1000}
                readOnly
              />
            </Form.Group>
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btnBox}>
              <Button
                variant="primary"
                type="button"
                onClick={() => {
                  navigate(`/`);
                }}
              >
                <img src={backIcon} alt="돌아가기 아이콘" />
                다시 쓰기
              </Button>
            </div>
            <div className={styles.btnBox}>
              <Button variant="primary" type="button" onClick={handlePrint}>
                <img src={printIcon} alt="출력 아이콘" />
                결과 출력하기
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Result;
