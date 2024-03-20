import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../css/Home.module.css";
import submitIcon from "../images/submitIcon.png";
import Navbars from "../components/Navbars";

function Home() {
  const [letterCount, setLetterCount] = useState(0);

  const changeLetterCount = (e) => {
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
              as={"textarea"}
              rows={15}
              maxLength={1000}
              onChange={changeLetterCount}
            />
          </Form.Group>
          <div className={styles.letterCountBox}>
            <div className={styles.letterCount}>
              현재 글자수: {letterCount} / 1000
            </div>
          </div>
          <div className={styles.submitBtnBox}>
            <Button variant="primary" type="submit">
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
