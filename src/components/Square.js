const Square = ({id, className}) => {

    const handleSquare = () => {
        const [a1, a2, b1, b2] = [document.getElementById('a1'), document.getElementById('a2'), document.getElementById('b1'), document.getElementById('b2')]
        const move = (cl1, cl2, temp1, temp2) => {
            cl1.remove(cl1[1])
            cl1.add(cl2[1])
            cl2.remove(temp2)
            cl2.add(temp1)
        }
        const isSolved = (a1,a2,b1) => {
            if (a1.classList.contains('a') && a2.classList.contains('b') && b1.classList.contains('c')) {
                document.getElementById('container').classList.add('container-disabled')
            }
        }
        if (id === 'a1') {
            if (a2.classList[1] === 'd') {
                let [cl1,cl2] = [a1.classList, a2.classList]
                let [temp1, temp2] = [cl1[1], cl2[1]]
                move(cl1, cl2, temp1, temp2)
            } else if (b1.classList[1] === 'd') {
                let [cl1,cl2] = [a1.classList, b1.classList]
                let [temp1, temp2] = [cl1[1], cl2[1]]
                move(cl1, cl2, temp1, temp2)
            }
            isSolved(a1,a2,b1)
        } else if (id === 'a2') {
            if (a1.classList[1] === 'd') {
                let [cl1,cl2] = [a2.classList, a1.classList]
                let [temp1, temp2] = [cl1[1], cl2[1]]
                move(cl1, cl2, temp1, temp2)
            } else if (b2.classList[1] === 'd') {
                let [cl1,cl2] = [a2.classList, b2.classList]
                let [temp1, temp2] = [cl1[1], cl2[1]]
                move(cl1, cl2, temp1, temp2)
            }
            isSolved(a1,a2,b1)
        } else if (id === 'b1') {
            if (a1.classList[1] === 'd') {
                let [cl1,cl2] = [b1.classList, a1.classList]
                let [temp1, temp2] = [cl1[1], cl2[1]]
                move(cl1, cl2, temp1, temp2)
            } else if (b2.classList[1] === 'd') {
                let [cl1,cl2] = [b1.classList, b2.classList]
                let [temp1, temp2] = [cl1[1], cl2[1]]
                move(cl1, cl2, temp1, temp2)
            }
            isSolved(a1,a2,b1)
        } else if (id === 'b2') {
            if (b1.classList[1] === 'd') {
                let [cl1,cl2] = [b2.classList, b1.classList]
                let [temp1, temp2] = [cl1[1], cl2[1]]
                move(cl1, cl2, temp1, temp2)
            } else if (a2.classList[1] === 'd') {
                let [cl1,cl2] = [b2.classList, a2.classList]
                let [temp1, temp2] = [cl1[1], cl2[1]]
                move(cl1, cl2, temp1, temp2)
            }
            isSolved(a1,a2,b1)
        }
    }

    return (
        <div id={id} className={className} onClick={handleSquare} >
        </div>
    )
}

export default Square
