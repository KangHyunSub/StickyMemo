# Stickynote with Template
4가지 템플릿 중 용도에 맞게 선택하여 사용해보세요,
  
`줄글 노트(Plain Note)` : 형식에 상관없이 자유롭게 메모하고 싶을 때  
`TODO 노트(TODO Note)`: 할 일을 정리하고, 완료하면 지우고 싶을 때  
`단어장 노트(Vocabulary Note)`: 정리해야할 단어는 산더미인데 하나씩 사전 검색하기 귀찮을 때  
`지출 노트(Expense Note)`: 어지러운 수입/지출, 얼마가 남은건지 궁금할 때  

![image](https://user-images.githubusercontent.com/62787552/122742433-e73cb000-d2c0-11eb-9742-b5b37077ef98.png)


## 사용 방법
1. 메모 추가  
    : 아래 섹션의 'PLAIN NOTE', 'TODO NOTE', 'VOCAB NOTE', 'EXPENSE NOTE' 중 원하는 노트에 맞추어 클릭하면 노트를 추가할 수 있어요. 
2. 메모 삭제  
    : 각 메모의 하단 우측에 있는 '삭제' 버튼을 통해 삭제할 수 있습니다. 
3. 메모 수정  
    : 별도의 수정 버튼이 없어요. 수정한 내용이 자동으로 반영되니까 저장 걱정 없이 편하게 내용을 바꾸어 보세요.
4. 즐겨찾기 설정 / 해제  
    : 노트는 기본적으로 아래 일반 섹션에 생성되고, 각 노트 상단의 빨간색 핀을 누르면 즐겨찾기 섹션(상단)으로 이동시킬 수 있습니다. 반대로, 즐겨찾기 섹션에 있는 메모의 핀을 누르면, 일반 섹션으로 이동시킬 수 있습니다. *(즐겨찾기 섹션에는 최대 5개의 노트를 추가할 수 있어요)*

## 템플릿 별 사용 방법
1. 줄글 노트: 원하는 내용을 작성하고, 지워보세요. 
2. TODO 노트
    - 해야할 일을 작성하고, 엔터를 눌러보세요. 아래에 내가 작성한 항목이 추가됩니다. 
    - 할 일을 끝냈다구요? 체크박스를 표시하여 마킹하거나, 할일 우측의 쓰레기통 버튼을 눌러서 삭제해보세요.
3. 단어장 노트
    - 찾아야 할 단어를 입력하고 엔터를 눌러보세요. 단어의 뜻은 네이버 파파고에서 찾아서 저희가 입력해 드릴게요.
    - 자동입력된 단어가 마음에 들지 않는다면, 단어의 뜻을 직접 수정할 수도 있어요.
4. 지출 노트
    - 사용한 날짜, 지출/소비여부, 금액, 소비항목을 차례대로 입력하고 엔터를 눌러보세요. 지출/소비여부에 따라 맨 아래에 총계를 계산해서 보여드릴게요.
    - 처음 입력할 때 잘못 입력했어도 괜찮아요, 기존 항목의 값을 수정하면 총계에 바로 반영되는 것을 확인할 수 없어요. 마찬가지로, 별도 수정사항 저장 버튼 없이 자동으로 저장된답니다. 

## REQUIREMENTS
```
node.js
react
bootstrap
axios
sweetalert
```

## 실행 방법
프로젝트 폴더로 이동한 후, cmd 창에 아래 명령어를 순차적으로 입력하세요.
```
npm install
yarn start
```
