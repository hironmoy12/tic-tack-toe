let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let turn = true;
let NewGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
//use 2D array

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turn = true;
  enabledBoxes();
};

//access the every boxes throgh foeach

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // if (turn) {
    //   box.innerText = "O";
    //   turn = false;
    // } else {
    //   box.innerText = "x";
    //   turn = true;
    // }

    box.innerText = turn ? "O" : "x";
    turn = !turn;
    box.disabled = true;
    checkWinner();
    msgContainer.classList.add("hide");
  });
});

const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `congratulation, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let post1 = boxes[pattern[0]].innerText;
    let post2 = boxes[pattern[1]].innerText;
    let post3 = boxes[pattern[2]].innerText;

    if (post1 != "" && post2 != "" && post3 != "") {
      if (post1 === post2 && post2 === post3) {
        console.log("winner", post1);
        showWinner(post1);
      }
    }
  }
};

NewGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
