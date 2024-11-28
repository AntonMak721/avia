import './TransferBlock.scss'
const TransferBlock = () => {
    return (
        <div className="TransferWrapper">
            <h3 className='TransferBlock__Header'>Количество пересадок</h3>
            <div className='TransferBlock'>
                <div className='TransferBlock__Item'>
                    <input  type="checkbox" value={0} />
                    <p>Все</p>
                </div>
                <div className='TransferBlock__Item'>
                    <input type="checkbox" value={1} />
                    <p>Без пересадок</p>
                </div>
                <div className='TransferBlock__Item'>
                    <input type="checkbox" value={2} />
                    <p>1 пересадка</p>
                </div>
                <div className='TransferBlock__Item'>
                    <input type="checkbox" value={3} />
                    <p>2 пересадки</p>
                </div>
                <div className='TransferBlock__Item'>
                    <input type="checkbox" value={4} />
                    <p>3 пересадки</p>
                </div> 
            </div>
            
             
        </div>
    );
};

export default TransferBlock;