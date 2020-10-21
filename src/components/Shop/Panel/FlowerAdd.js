import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const FlowerAdd = () => {
    let history = useHistory();
    console.log("TEST FLOWERADD");
    const [reserve, setReserve] = useState({
        name: '',
        description: '',
        season: '',
        color: '',
        img: '',
        price: '',
        shops_id: '',
    })
    
    const onReserveChange = (e) => {
        setReserve({ ...reserve, [e.target.name]: e.target.value });
    };
const handleUpload = (e) => {
    e.preventDefault();
    // const file = e.target.files[0];
    // setFiles([...files, { uploadedFile: file }]);
  };
    const onDataSave = () => {
        if (reserve.name == "") {
            alert("꽃이름을 입력하세요");
        }
        if (reserve.season == "") {
            alert("계절을 입력하세요.");
        }
        if (reserve.color == "") {
            alert("색상을 입력하세요.");
        }
        if (reserve.price == "") {
            alert("가격을 입력하세요.");
        }
        // debugger;
        // console.log(reserve);
        const apiUrl = `http://localhost:8000/flowers/flower/`;
        axios
            .post(apiUrl, reserve)
            .then((response) => {
                console.log("등록완료데이터: ", response.data);
                alert("등록완료");
                history.push("List");
            })
            .catch((response) => {
                console.error(response);
            });
    };
    return (
        
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>꽃 이름</td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                value={reserve.name}
                                onChange={(e) => onReserveChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>꽃말</td>
                        <td>
                            <input
                                type="text"
                                name="description"
                                value={reserve.description}
                                onChange={(e) => onReserveChange(e)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>계절</td>
                        <td>
                            <input
                                type="text"
                                name="season"
                                value={reserve.season}
                                onChange={(e) => onReserveChange(e)}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>색상</td>
                        <td>
                            <input
                                type="text"
                                name="color"
                                value={reserve.color}
                                onChange={(e) => onReserveChange(e)}
                            />
                        </td>
                    </tr>

                    {/* <tr>
                        <td>이미지</td>
                        <td>
                            <input
                                type="file"
                                name="img"
                                value={reserve.img}
                                accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
                                onChange={(e) => handleUplode(e)}
                            />
                        </td>
                    </tr> */}

                    <tr>
                        <td>가격</td>
                        <td>
                            <input
                                type="text"
                                name="price"
                                value={reserve.price}
                                onChange={(e) => onReserveChange(e)}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <button onClick={() => onDataSave()}>
                                등록
                            </button>
                            {/* <button onClick={() => history.goBack()}>
                                뒤로가기
                            </button>
                            <button onClick={() => onMovePage()}>
                                목록이동
                            </button> */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FlowerAdd;