import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { write, evaluate } from "../redux/slices/essay";
import useAxios from "../hooks/useAxios";
import { Form, Button, Modal, Spinner } from "react-bootstrap";
import styles from "../css/Home.module.css";
import submitIcon from "../images/submitIcon.png";
import Navbars from "../components/Navbars";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const essay = useSelector((state) => state.essay);

  const [originalText, setOriginalText] = useState(essay.originalText);
  const [letterCount, setLetterCount] = useState(originalText.length);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { responseData, error, isLoading, request } = useAxios({
    method: "POST",
    url: `api/result/`,
    requestData: {
      original_text: originalText,
    },
  });

  useEffect(() => {
    if (isLoading) {
      setIsModalVisible(false);
    } else {
      setIsModalVisible(true);
    }
  }, [isLoading]);

  useEffect(() => {
    if (responseData !== null) {
      dispatch(evaluate({
        correctedText: responseData.corrected_text,
        wrongSpelling: responseData.wrong_spelling,
        wrongSpacing: responseData.wrong_spacing,
        cont1Score: responseData.cont1_score,
        cont1Comment: responseData.cont1_comment,
        cont2Score: responseData.cont2_score,
        cont2Comment: responseData.cont2_comment,
        exp2Score: responseData.exp2_score,
        exp2Comment: responseData.exp2_comment,
        exp3Score: responseData.exp3_score,
        exp3Comment: responseData.exp3_comment,
        org3Score: responseData.org3_score,
        org3Comment: responseData.org3_comment
      }));
      navigate(`/result`);
    }
  }, [responseData]);

  const handleSubmit = () => {
    dispatch(write({ originalText }));
    setIsModalVisible(true);
    request();
  };

  const handleTextArea = (e) => {
    setOriginalText(e.target.value);
    setLetterCount(e.target.value.length);
  };

  return (
    <>
      <Navbars />
      <div className={styles.container}>
        <Form>
          <Form.Group className={styles.textBox}>
            <Form.Label>하단에 에세이를 입력해주세요.</Form.Label>
            <Form.Control
              className={styles.textArea}
              as="textarea"
              value={originalText}
              rows={15}
              maxLength={1000}
              onChange={handleTextArea}
            />
          </Form.Group>
          <div className={styles.letterCountBox}>
            <div className={styles.letterCount}>
              현재 글자수: {letterCount} / 1000
            </div>
          </div>
          <div className={styles.btnBox}>
            <Button variant="primary" onClick={handleSubmit}>
              <img src={submitIcon} alt="제출 아이콘" />
              제출하기
            </Button>
          </div>
        </Form>
      </div>

      <Modal show={isModalVisible} backdrop="static" keyboard={false} centered>
        <Modal.Body className={styles.modalBody}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className={styles.loadingNotice}>채점 중입니다. 잠시만 기다려 주세요...</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;