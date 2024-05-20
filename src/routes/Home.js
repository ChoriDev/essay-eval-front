import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { write, evaluate } from "../redux/slices/essay";
import useAxios from "../hooks/useAxios";
import { Form, Button } from "react-bootstrap";
import styles from "../css/Home.module.css";
import submitIcon from "../images/submitIcon.png";
import Navbars from "../components/Navbars";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const essay = useSelector((state) => state.essay);

  const [content, setContent] = useState(essay.content);
  const [letterCount, setLetterCount] = useState(content.length);

  const { responseData, error, isLoading, request } = useAxios({
    method: "POST",
    url: `api/result/`,
    requestData: {
      "content":content,
    },
  });

  useEffect(() => {
    if (responseData !== null) {
      dispatch(evaluate({ feedback: responseData.feedback }));
      navigate(`/result/`);
    }
  }, [responseData]);

  const handleSumbit = () => {
    dispatch(write({ content }));
    request();
  };

  const handleTextArea = (e) => {
    setContent(e.target.value);
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
              value={content}
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
            <Button variant="primary" onClick={handleSumbit}>
              <img src={submitIcon} alt="제출 아이콘" />
              제출하기
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Home;
