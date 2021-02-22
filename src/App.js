import Square from './components/Square'
import Button from './components/Button'


const App = () => {
    const solvableStates = [
      ['a', 'b', 'c', 'd'],
      ['a', 'd', 'c', 'b'],
      ['d', 'a', 'c', 'b'],
      ['c', 'a', 'd', 'b'],
      ['c', 'a', 'b', 'd'],
      ['c', 'd', 'b', 'a'],
      ['d', 'c', 'b', 'a'],
      ['b', 'c', 'd', 'a'],
      ['b', 'c', 'a', 'd'],
      ['b', 'd', 'a', 'c'],
      ['d', 'b', 'a', 'c'],
      ['a', 'b', 'd', 'c']
    ]

    const shuffle = () => {
      // get and organize elements
      let [a1,a2,b1,b2] = [document.getElementById('a1'), document.getElementById('a2'),document.getElementById('b1'),document.getElementById('b2')]
      let squares = [a1,a2,b1,b2]
      let pieces = ['a', 'b', 'c', 'd']

      document.getElementById('container').classList.remove('container-disabled')

      // remove individual classes
      squares.forEach((square) => {
        square.className = ''
        square.classList.add('piece')
      })

      // randomize array order
      const randomPieces = pieces.slice()
      for (let i = randomPieces.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [randomPieces[i], randomPieces[rand]] = [randomPieces[rand], randomPieces[i]];
      }

      // assign random individual classes to each square
      for(let i = 0; i <= squares.length-1; i++) {
        squares[i].classList.add(randomPieces[i])
      }
      
      // check if puzzle can be solved
      let solvable = 0
      solvableStates.forEach((array) => {
        if(JSON.stringify(array) === JSON.stringify(randomPieces)) {
            solvable = 1
        }
      })
      if(!solvable) {shuffle()}
      if(JSON.stringify(pieces) === JSON.stringify(randomPieces)) {
        shuffle()
    }
    }

    // reload to get new picture
    const changePicture = () => {
      window.location.reload()
    }


  return (
    <div id="puzzle" className="puzzle">
      <div id="container" className="container">
        <div className="row1">
          <Square id="a1" className="piece a"/>
          <Square id="a2" className="piece b"/>
        </div>
        <div className="row2">
          <Square id="b1" className="piece c"/>
          <Square id="b2" className="piece d"/>
        </div>
      </div>
      <div className="controls">
        <Button id="shuffle-btn" className="btn shuffle-btn" text="Shuffle" onClick={shuffle}/>
        <Button id="change-btn" className="btn change-btn" text="Change" onClick={changePicture}/>
      </div>
    </div>
  );
}

export default App;
