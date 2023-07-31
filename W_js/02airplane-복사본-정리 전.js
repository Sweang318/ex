// 한국공항공사_국제선 항공기스케줄 인증키 ee9lQRIDZT0vs7qnbb%2BJVmf9aYBqqKZk56FRdMjM0WZAf0Bgl94CxqaJV417IoK%2Blp248JjdRVoYqo%2BeG3mMtg%3D%3D
// const publicAPIurl = `https://apis.data.go.kr/B551177/StatusOfPassengerWorldWeatherInfo/getPassengerDeparturesWorldWeather?serviceKey=ee9lQRIDZT0vs7qnbb%2BJVmf9aYBqqKZk56FRdMjM0WZAf0Bgl94CxqaJV417IoK%2Blp248JjdRVoYqo%2BeG3mMtg%3D%3D&numOfRows=588&pageNo=1&from_time=0000&to_time=2400&lang=K`;
// axios({
//     url: 'https://cors-proxy.org/api/',
//     method: 'get',
//     headers: {
//         'cors-proxy-url':  publicAPIurl// 이 부분을 이용하는 서버 URL로 변경
//     },
// }).then((response) => {
//     let content = response.data.data.response.body.items

//     console.log(content);
//     console.log(content.item[1].cityKor);
//     let cityKor = content.item[1].cityKor
//     console.log(cityKor);
// })


// const publicAPIurl = `http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList?serviceKey=gptlfeF0tckKWZugnRmyvS4wuIp7K2dDyLC9SjDzp%2BIk8HEEiN8OH9m9Xm1%2BH%2FIvBWPxcRBQ8mhpUGvA9n9yVA%3D%3D&&numOfRows=30`;

// axios({
//     url: 'https://cors-proxy.org/api/',
//     method: 'get',
//     headers: {
//         'cors-proxy-url':  publicAPIurl// 이 부분을 이용하는 서버 URL로 변경
//     },
// }).then((response) => {
//     let content = response.data.data.response.body.items

//     console.log(content);
//     console.log(content.item[1].cityKor);
//     let cityKor = content.item[1].cityKor
//     console.log(cityKor);
// })

// 파일xml에서 정보 가져오기
// fetch(url)
// 	.then((response) => response.text())
// 	.then((xml) => {

// 		let data = new DOMParser().parseFromString(xml, "text/xml"); // xml데이터 방식 DOM으로 구현
//         console.log(data)
//     })

// const url = 'getIflightScheduleList.xml';

// $.ajax({
//     url: '../W_js/인천국제공항공사_취항항공사현황조회.json', // 읽어올 문서
//     type: 'GET', // 방식
//     dataType: 'json', // 문서 타입
//     timeout: 1000, // 시간 설정
//     error: function () { // 로딩 에러시
//         alert('Error');
//     },
//     success: function (response) {
//         console.log(response.response.body.items);

//         // let flightid = response.response.body.items[0].flightid;
//         // $('#flightid02_atb').text(flightid);
//     }
// });

//여객 도착 시간표
$.ajax({
    url: '../W_js/여객편(주간운항)현황_도착.json', // 읽어올 문서
    type: 'GET', // 방식
    dataType: 'json', // 문서 타입
    timeout: 1000, // 시간 설정
    error: function () { // 로딩 에러시
        alert('Error');
    },
    success: function (response) {
        var arrival01 = response.response.body.items;

        var elem = '';
        $.each(arrival01, function () {
            elem += `<tr>`;
            elem += `<td class="scheduleDateTime01_atb">${this.scheduleDateTime}</td>`;
            elem += `<td class="airport01_atb">${this.airport}</td>`;
            elem += `<td class="airline01_atb">${this.airline} - ${this.flightId}</td>`;
            elem += `<td class="terminalid01_atb">${this.terminalid}</td>`;
            elem += `<td class="gatenumber01_atb">${this.gatenumber}</td>`;
            elem += `<td class="exitnumber01_atb">${this.carousel}</td>`;
            elem += `<td class="exitnumber01_atb">${this.exitnumber}</td>`;
            elem += `<td class="remark01_atb">${this.remark}</td>`;
            elem += `<td> - </td>`;
            elem += `</tr>`;
        });
        // $(".arrival01_tb table tbody").append(elem); //여기 부활 시키기
    }
});

// 여객 도착 정기 운항편(최초)

//여객편 정기운항편일정_도착
$.ajax({
    url: '../W_js/여객편(정기운항편)일정_도착2.json', // 읽어올 문서
    type: 'GET', // 방식
    dataType: 'json', // 문서 타입
    timeout: 1000, // 시간 설정
    error: function () { // 로딩 에러시
        alert('Error');
    },
    success: function (response) {
        var arrival02 = response.response.body.items;
        console.log(arrival02);
        // var flightId = arrival02

        // 여객편 정기운항편일정_도착 파일을 통해 운항편명, 항공사, 운항요일, 출발지(출발공항코드)
        // 출발지를 공유 => 변수처리 => api에서는 url따오기(json에서는 검색해오기)
        var elem = '';
        // $.each(arrival02, function () { // 배열형태의 data의 각 객체 obj에 접근한다 
        //     // tr한줄을 완성하기 위해, 빈문자열로 만들어진 변수 elem에 추가 대입 시작

        //     // 기본 밀어넣기
        //     // elem += `<tr>`;
        //     // elem += `<td class="flightid">${this.flightid}</td>`;
        //     // elem += `<td class="airline">${this.airline}</td>`;
        //     // elem += `<td class="scheduleDateTime"></td>`;
        //     // elem += `<td class="airport">${this.airport}</td>`;
        //     // elem += `<td class="terminalid">${this.terminalid}</td>`;
        //     // elem += `<td class="week_sub">`;
        //     // if (`${this.monday}` !== 'Y') { elem += `<div class="off">${this.monday}</div>`; }
        //     // else { elem += `<div>${this.monday}<i class="fa-solid fa-plane-departure"></i></div>`; } //월
        //     // if (`${this.tuesday}` !== 'Y') { elem += `<div class="off">${this.tuesday}</div>`; }
        //     // else { elem += `<div>${this.tuesday}<i class="fa-solid fa-plane-departure"></i></div>`; } //화
        //     // if (`${this.wednesday}` !== 'Y') { elem += `<div class="off">${this.wednesday}</div>`; }
        //     // else { elem += `<div>${this.wednesday}<i class="fa-solid fa-plane-departure"></i></div>`; } //수
        //     // if (`${this.thursday}` !== 'Y') { elem += `<div class="off">${this.thursday}</div>`; }
        //     // else { elem += `<div>${this.thursday}<i class="fa-solid fa-plane-departure"></i></div>`; }//목
        //     // if (`${this.friday}` !== 'Y') { elem += `<div class="off">${this.friday}</div>`; }
        //     // else { elem += `<div>${this.friday}<i class="fa-solid fa-plane-departure"></i></div>`; }//금
        //     // if (`${this.saturday}` !== 'Y') { elem += `<div class="off">${this.saturday}</div>`; }
        //     // else { elem += `<div>${this.saturday}<i class="fa-solid fa-plane-departure"></i></div>`; }//토
        //     // if (`${this.sunday}` !== 'Y') { elem += `<div class="off">${this.sunday}</div>`; }
        //     // else { elem += `<div>${this.sunday}<i class="fa-solid fa-plane-departure"></i></div>`; }//일
        //     // elem += `</td>`;
        //     // elem += `<td class="bodydate">${this.firstdate} ~ ${this.lastdate}</td>`; //운항시작일 ~ 종료일
        //     // elem += `</tr>`;
        // });

        // $(".arrival02_tb table tbody").append(elem);

        // var response = arrival02;
        // var airportname = "오사카/간사이";
        // var airportname02 = "하노이";
        // var airportname03 = "다낭";

        // response.forEach((item) => {
        //     if (item.airport.indexOf(airportname02) == 0) {
        //       console.log(item, item.airport);
        //     }
        //   });





        //159줄 시작
        //원하는 출발지 값만 밀어넣기
        let allAirport = arrival02.map(function (e) { return e.airport; }); //출발지 추출
        let setAirport = [...new Set(allAirport)]; //중복제거
        console.log(setAirport); //배열로 셀렉트박스 채우기, for in구문으로 돌리기
        //사용자가 출발지를 선택하면(셀렉트박스의 값이 변동하면) 값을 추출하여 L.167의 '하노이'에 집어넣기


        var selectAirport = arrival02.filter(e => e.airport === '하노이');
        console.log(selectAirport);


        $.each(selectAirport, function () {
            elem += `<tr>`;
            elem += `<td class="flightid">${this.flightid}</td>`;
            elem += `<td class="airline">${this.airline}</td>`;
            elem += `<td class="scheduleDateTime"></td>`;
            elem += `<td class="airport">${this.airport}</td>`;
            elem += `<td class="terminalid">${this.terminalid}</td>`;
            elem += `<td class="week_sub">`;
            if (`${this.monday}` !== 'Y') { elem += `<div class="off">${this.monday}</div>`; }
            else { elem += `<div>${this.monday}<i class="fa-solid fa-plane-departure"></i></div>`; } //월
            if (`${this.tuesday}` !== 'Y') { elem += `<div class="off">${this.tuesday}</div>`; }
            else { elem += `<div>${this.tuesday}<i class="fa-solid fa-plane-departure"></i></div>`; } //화
            if (`${this.wednesday}` !== 'Y') { elem += `<div class="off">${this.wednesday}</div>`; }
            else { elem += `<div>${this.wednesday}<i class="fa-solid fa-plane-departure"></i></div>`; } //수
            if (`${this.thursday}` !== 'Y') { elem += `<div class="off">${this.thursday}</div>`; }
            else { elem += `<div>${this.thursday}<i class="fa-solid fa-plane-departure"></i></div>`; }//목
            if (`${this.friday}` !== 'Y') { elem += `<div class="off">${this.friday}</div>`; }
            else { elem += `<div>${this.friday}<i class="fa-solid fa-plane-departure"></i></div>`; }//금
            if (`${this.saturday}` !== 'Y') { elem += `<div class="off">${this.saturday}</div>`; }
            else { elem += `<div>${this.saturday}<i class="fa-solid fa-plane-departure"></i></div>`; }//토
            if (`${this.sunday}` !== 'Y') { elem += `<div class="off">${this.sunday}</div>`; }
            else { elem += `<div>${this.sunday}<i class="fa-solid fa-plane-departure"></i></div>`; }//일
            elem += `</td>`;
            elem += `<td class="bodydate">${this.firstdate} ~ ${this.lastdate}</td>`; //운항시작일 ~ 종료일
            elem += `</tr>`;
        });
        $(".arrival02_tb table tbody").append(elem);


        function flightCode(n) {
            let code = arrival02[n].flightid;
            return code;
        }
        // 항공편명 뽑는 함수




        // 여객편 주간운항현황_도착 파일을 통해서 도착시간, 터미널
        $.ajax({
            url: '../W_js/여객편(주간운항)현황_도착.json', // 읽어올 문서
            type: 'GET', // 방식
            dataType: 'json', // 문서 타입
            timeout: 1000, // 시간 설정
            error: function () { // 로딩 에러시
                alert('Error');
            },
            success: function (response) {
                const weekAirplain = response.response.body.items; //해당 객체 let terminalid 배열임
                // console.log(weekAirplain[38])
                $.each(selectAirport, function (index) {// each가 도는 횟수는 위에서 원하는 출발지만 추출한 결과수랑 같다
                    let toflightid = flightCode(index); // 일정데이터의 항공편명을 뽑아 현황데이터랑 편명동기화
                    let findFlightidIndex = weekAirplain.map(function (e) { return e.flightId; }).indexOf(toflightid); //현황데이터에서 편명으로 검색하여 인덱스 번호 추출

                    let scheduleDateTime = weekAirplain[findFlightidIndex].scheduleDateTime; //현황데이터에서편명인덱스에 맞는 스케쥴 추출
                    let terminalid = weekAirplain[findFlightidIndex].terminalid; //현황데이터에서편명인덱스에 맞는 터미널 추출
                    $('.arrival02_tb table tbody tr').eq(index).children('td:nth-child(3)').text(scheduleDateTime);
                    $('.arrival02_tb table tbody tr').eq(index).children('td:nth-child(5)').text(terminalid);


                });





                //         // 여객편정기운항편일정_도착(윗파일)에서 추출한 출발지를 flightid에 저장, 이를 아래 ajax로 가져오고, 변수가 겹치는것을 방지하기 위해 다른변수에 할당
                //         // 출발지가 동일한 파일을 찾아서 동일 항공편 배열번호로 치환

                //         //var index = 객체명.map(function(e) { return e.키; }).indexOf(값);
                //         //해당 객체에서 원하는 값을 검색하여 그 객체의 인덱스 번호 추출하기(첫번째만 추출됨)
                //         //추후 전체 번호 추출해야함
                //         // console.log(index);

                //         // 해당 인덱스 번호로 찾아가 도착시간 추출, D7504로 검색했을 때 7개 나오는데, 그중 첫번째를 뽑은거
                //         $.each(arrival02, function(index) {
                //         let toflightid = flightCode(index);
                //         let flightidIndex = weekAirplain.map(function (e) { return e.flightId; }).indexOf(toflightid);
                //         let scheduleDateTime = weekAirplain[flightidIndex].scheduleDateTime;
                //         $('.arrival02_tb table tbody tr').eq(flightidIndex).children('td:nth-child(3)').text(scheduleDateTime);
                //         console.log(scheduleDateTime)
                //         })

                //         // 79번 문제 있음  데이터는 78까지만 호출하기
                //         // for (let index = 90; index <= 100; index++) {
                //         //     let toflightid = flightCode(index);
                //         //     let flightidIndex = weekAirplain.map(function (e) { return e.flightId; }).indexOf(toflightid);
                //         //     let scheduleDateTime = weekAirplain[flightidIndex].scheduleDateTime;
                //         //     // let terminalid = weekAirplain[flightidIndex].terminalid;
                //         //     // console.log(scheduleDateTime);
                //         //     // console.log(terminalid);
                //         //     $('.arrival02_tb table tbody tr').eq(flightidIndex).children('td:nth-child(3)').text(scheduleDateTime);
                //         //     // $('.arrival02_tb table tbody tr').eq(flightidIndex).children('td:nth-child(5)').text(terminalid);

                //         // }

                //         // for (let index = 0; index <= 78; index++) {
                //         //     let toflightid = flightCode(index);
                //         //     let flightidIndex = weekAirplain.map(function (e) { return e.flightId; }).indexOf(toflightid);
                //         //     let terminalid = weekAirplain[flightidIndex].terminalid;
                //         //     $('.arrival02_tb table tbody tr').eq(flightidIndex).children('td:nth-child(5)').text(terminalid);
                //         // }



                //         // //woo
                //         // let terminalid = response.response.body.items[index].terminalid;
                //         // $('#terminalid02_atb').text(terminalid);
                //         //앞으로 할 일
                //         // tbody 채우기 each를 사용하여 모든 데이터의 정보가 tr로 들어올 수 있도록 짜기
                //         //그후 코드 정리 

                //         // var elem = '';
                //         // $('.arrival02_tb table tbody').each(function () {
                //         //     elem += `<tr>`;
                //         //      elem += `<td>${response.response.body.items[1].flightid}</td>`;
                //         //      elem += `<td>${response.response.body.items[1].airline}</td>`;
                //         //      elem += `<td>${response.response.body.items[1].scheduleDateTime}</td>`;
                //         //      elem += `<td>${response.response.body.items[1].airport}</td>`;
                //         //      elem += `<td>${response.response.body.items[1].terminalid}</td>`;
                //         //      elem += `<td>${response.response.body.items[1].week_sub}</td>`;
                //         //      elem += `<td>${response.response.body.items[1].firstdate + ' ~ ' +lastdate}</td>`;
                //         //     elem += `</tr>`;
                //         // });
                //         // $(".arrival02_tb table tbody").append(elem);

            }
        });


    }
});



// // 여객 출발 시간표
// $.ajax({
//     url: '../W_js/여객편(주간운항)현황_출발.json', // 읽어올 문서
//     type: 'GET', // 방식
//     dataType: 'json', // 문서 타입
//     timeout: 1000, // 시간 설정
//     error: function () { // 로딩 에러시
//         alert('Error');
//     },
//     success: function (response) {
//         console.log(response.response.body.items);

//         let estimatedDateTime = response.response.body.items[0].estimatedDateTime;
//         let airport = response.response.body.items[0].airport;
//         let airline = response.response.body.items[0].airline;
//         let flightId = response.response.body.items[0].flightId;
//         let terminalid = response.response.body.items[0].terminalid;
//         let remark = response.response.body.items[0].remark;
//         let gatenumber = response.response.body.items[0].gatenumber;
//         let chkinrange = response.response.body.items[0].chkinrange;
//         $('#timeStart01_dtb').text(estimatedDateTime);
//         $('#airport01_dtb').text(airport);
//         $('#airline01_dtb').text(airline + ' - ' + flightId);
//         $('#terminalid01_dtb').text(terminalid);
//         $('#remark01_dtb').text(remark);
//         $('#gatenumber_01_dtb').text(gatenumber);
//         $('#chkinrange01_dtb').text(chkinrange);
//     }
// });

// //여객 출발 정기 운항편
// $.ajax({
//     url: '../W_js/여객편(정기운항편)일정_출발.json', // 읽어올 문서
//     type: 'GET', // 방식
//     dataType: 'json', // 문서 타입
//     timeout: 1000, // 시간 설정
//     error: function () { // 로딩 에러시
//         alert('Error');
//     },
//     success: function (response) {
//         console.log(response.response.body.items);
//     }
// });

// 1, 서로 다른 제이슨 array 안 내용물 (?) 끼리 연결 하는 방법
// ex = 인천국제공항공사json의 array 0 안에 있는 airlineName : 비엣젯항공과 / 여객편정기운항편일정_도착json의 array 2 안에 있는 airline: 비엣젯항공을 연결시키려면 어떻게?
//(선언된 이름은 다른데 내용물은 같은경우) + (선언된 이름이 같은 경우는...?)

// 2, 셀렉트옵션 안에 내용물 선택시 원하는 정보 출력되게 하는 방법

// 3, 내용물이 PO1 이라는 코드네임 일경우 T1 으로 바꿔치기 하는 방법.

//정기 업데이트 필요한 json (2주 간격)
// #인천국제공항공사_여객편 주간 운항 현황 = 출 도착, 터미널정보, 편명, 항공사, 수취대번호, 체크인 카운터
// 인천국제공항공사_여객기 정기운항편 일정 정보(출,도착) = 요일 정보, 항공기 정기 운항정보
//주기적으로 업데이트 필요 x
// #인천국제공항공사_취항 항공사 현황 조회 = 로고, 로고url

// # 인천국제공항공사_기상 정보
// 여객비행기운항정보(항공사명, 편명, 예정시간, 변경시간, 소요시간,
// 출발공항, 탑승구, 수하물수취대, 출구, 현황(도착/출발,결항,지연,회항,착륙),
// 날씨 현황(출발도시,도착도시)) 를 조회 해당일로 나타내는 여객편운항현황 정보 서비스

// +   전체 터미널 정보 P01:제1터미널,P02:탑승동,P03:제2터미널,C01:화물터미널 남측,C02:화물터미널 북측,C03:제2화물터미널

// ---출발시간/ 항공사/ 터미널 정보/ 탑승구 번호/ 출발 현황/ 기상 정보/ 출구번호/ 수하물 수취대 번호

// 실험

$(function () {
    $('.도착').click(function () {
        $('.departure').addClass('on').siblings().removeClass('on');
    });
    $('.출발').click(function () {
        $('.arrival').addClass('on').siblings().removeClass('on');
    });
    $('.도착').trigger('click'); //도착이 눌린 상태로 시작하겠다
});

$(function () {
    //도착내부 탭
    $('.도착시간표').click(function () {
        $('.arrival02').addClass('on').siblings().removeClass('on');
    });
    $('.도착정기운항편').click(function () {
        $('.arrival01').addClass('on').siblings().removeClass('on');
    });
    $('.도착시간표').trigger('click'); //도착시간표가 눌린 상태로 시작하겠다
});

$(function () {
    // 출발 내부 탭
    $('.출발시간표').click(function () {
        $('.departure02').addClass('on').siblings().removeClass('on');
    });
    $('.출발정기운항편').click(function () {
        $('.departure01').addClass('on').siblings().removeClass('on');
    });
    $('.출발시간표').trigger('click'); //출발시간표가 눌린 상태로 시작하겠다
});


//으악 

