import React from 'react';
import PageHeader from '../component/PageHeader';
import { firebaseStorage } from '../config';
import PortfolioModal from '../component/PortfolioModal';
import PortfolioItem from '../component/PortfolioItem';
const About = () => {
	return (
		<div>
			<PageHeader
				title="ABout Me"
				subtittle="노가다 짓이라 말하면서 계속 코딩만 하는 변태"
				Background={firebaseStorage.Url + 'About.jpg?alt=media&token=' + firebaseStorage.Token}
			/>
			<section className="bg-light" id="portfolio">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="section-heading text-uppercase">Portfolio</h2>
							<h3 className="section-subheading text-muted">일부를 제외한 소스코드는 제 깃허브에서 보실수있습니다.</h3>
							<h4 className="section-subheading text-muted">
								<a href="https://github.com/azxca1731?tab=repositories">깃허브로 가기</a>
							</h4>
						</div>
					</div>
					<div className="row">
						<PortfolioItem
							id="1"
							img="https://firebasestorage.googleapis.com/v0/b/githubpage-efc76.appspot.com/o/portfolio%2F%EC%95%88%EC%A0%84%EC%A0%9C%EC%9D%BC.PNG?alt=media&token=1bd7196b-cae6-4a53-b1f4-72de2d221852"
							team="안전제일"
							category="Arduino"
						/>
						<PortfolioItem
							id="2"
							img="https://firebasestorage.googleapis.com/v0/b/githubpage-efc76.appspot.com/o/portfolio%2F%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8%EC%95%B1.PNG?alt=media&token=3b881605-0921-4272-928a-2022bfd012c2"
							team="다이어트앱"
							category="Android"
						/>
						<PortfolioItem
							id="3"
							img="https://firebasestorage.googleapis.com/v0/b/githubpage-efc76.appspot.com/o/portfolio%2F%EB%A9%94%EB%94%94%EC%BB%AC%ED%83%91%ED%8C%80.PNG?alt=media&token=8dea6f5c-0535-4295-ad44-304076882ddc"
							team="메디컬탑팀"
							category="Web"
						/>
						<PortfolioItem
							id="4"
							img="https://firebasestorage.googleapis.com/v0/b/githubpage-efc76.appspot.com/o/portfolio%2Freactnasa.gif?alt=media&token=96258c34-cb77-43a7-ad9e-367330e2f526"
							team="나사이미지검색"
							category="React"
						/>
						<PortfolioItem
							id="5"
							img="https://firebasestorage.googleapis.com/v0/b/githubpage-efc76.appspot.com/o/portfolio%2Fsearch.gif?alt=media&token=f1108846-aefe-4f51-9ed4-6ea1e9292e57"
							team="미러챗"
							category="Web"
						/>
						<PortfolioItem
							id="6"
							img="https://firebasestorage.googleapis.com/v0/b/githubpage-efc76.appspot.com/o/portfolio%2F%EB%85%B8%EA%B0%80%EB%8B%A4%EC%82%AC%EB%AC%B4%EC%86%8C.PNG?alt=media&token=0518f3a2-f6f9-4b33-9f6a-124cf8f84598"
							team="노가다사무소(개발중)"
							category="React"
						/>
					</div>
				</div>
			</section>
			<PortfolioModal
				id="1"
				img="https://www.youtube.com/embed/PBBLHcmY5LY"
				name="안전제일"
				smallname="아두이노로 만든 유치원 등원시스템"
				date="2017 August"
				category="Arduino"
				text="맡은 일:아두이노 .RFID,카메라,이더넷쉴드로 제작하였습니다. RFID로 인식이 된 후 몇 초뒤에 사진을 찍고 이더넷쉴드로 서버로 보냅니다."
			/>
			<PortfolioModal
				id="2"
				img="https://www.youtube.com/embed/fTUegbluwig"
				name="다이어트앱"
				smallname="팀 스파클링에서 만든 칼로리 조절 앱"
				date="2017 November"
				category="Android"
				text="맡은 일:인증, 친구화면,메뉴등록화면. 파이어베이스 스토리지,Auth,DB를 사용하여 서버리스를 지향하는 앱을 제작했습니다. Auth부분은 OAuth2.0을통해 쉽게 가입이 가능하도록 하였고 사용자 구분을 위해 firebaseAuth를 사용해 개인정보를 효과적으로 저장하였습니다. 이 저장한 개인정보를 기반으로 친구기능을 만들었습니다."
			/>
			<PortfolioModal
				id="3"
				img="https://www.youtube.com/embed/tojDIBCoG4w"
				name="메디컬탑팀"
				smallname="아두이노를 이용하여 환자의 실시간 정보를 모니터링하고 관리할 수 있는 병원 시스템웹"
				date="2018 June"
				category="Web"
				text="맡은 일: 모니터링 화면, 로그인, 환자진단. 모니터링 화면은 타 팀원이 센싱한 환자의 실시간 정보를 받아 AJAX로 실시간 모니터링 화면을 구성했습니다. 로그인 화면은 passport를 이용하여 완성했습니다."
			/>
			<PortfolioModal
				id="4"
				img="https://firebasestorage.googleapis.com/v0/b/githubpage-efc76.appspot.com/o/portfolio%2Freactnasa.gif?alt=media&token=96258c34-cb77-43a7-ad9e-367330e2f526"
				name="나사 이미지 검색"
				smallname="리액트로 만든 나사 이미지 검색 웹"
				date="2018 July"
				category="React"
				text="맡은 일:개인프로젝트. 리액트를 사용해 나사API를 응용한 웹을 만들었습니다. 리덕스와 리덕스프라미스를 이용해 비동기 처리를 해주었고 무한 스크롤이 가능하게끔 해주었습니다."
				type="img"
			/>
			<PortfolioModal
				id="5"
				img="https://firebasestorage.googleapis.com/v0/b/githubpage-efc76.appspot.com/o/portfolio%2Fsearch.gif?alt=media&token=f1108846-aefe-4f51-9ed4-6ea1e9292e57"
				name="미러챗"
				smallname="노드js로 만든 실시간 채팅 및 파일 수정웹"
				date="2018 August"
				category="Web"
				text="맡은 일:개인프로젝트. 로그인 부분은 passport를 이용하여 세션을 유지하고 또한 bcrypt를 사용해 안정성을 높였습니다. 채팅부분은 디비를 통하여 채팅을 저장하고 소켓io로 실시간 통신을 구현하였습니다. 또한 서치부분은 adm-zip으로 zip파일을 넣을시에 자동으로 압축해제를 해주었고 코드미러를 통해 파일을 간단히 수정할수 있게 만들었습니다."
				type="img"
			/>
			<PortfolioModal
				id="6"
				img="https://firebasestorage.googleapis.com/v0/b/githubpage-efc76.appspot.com/o/portfolio%2F%EB%85%B8%EA%B0%80%EB%8B%A4%EC%82%AC%EB%AC%B4%EC%86%8C.PNG?alt=media&token=0518f3a2-f6f9-4b33-9f6a-124cf8f84598"
				name="노가다사무소"
				smallname="리액트로 현재도 계속 만들고 있는 블로그"
				date="2018 August"
				category="React"
				text="맡은 일:개인프로젝트. 리액트 라우터를 이용하여 라우팅을 하고 파이어베이스DB와 스토리지 그리고 깃허브 페이지를 이용하여 서버리스를 목표로 열심히 제작중입니다."
				type="img"
			/>
		</div>
	);
};
export default About;
