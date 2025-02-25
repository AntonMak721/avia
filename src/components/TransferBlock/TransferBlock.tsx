// import React,{ FC } from "react";
// import classes from './transferBlock.module.scss'

// interface Props {
//     setFilter: (filter: string) => void;
//     filter: string;
//     }

// const TransferBlock: FC<Props>= ({setFilter, filter}) => {
//     return (
//         <div className={classes.TransferWrapper}>
//             <h3 className={classes.TransferWrapper__Header}>Количество пересадок</h3>
//             <div className={classes.TransferBlock}>
//                 <div className={classes.TransferBlock__Item} id='all'>
//                     <input  type="checkbox"  checked={filter === 'all'}  onChange={()=> setFilter('all')}  />
//                     <p>Все</p>
//                 </div>
//                 <div className={classes.TransferBlock__Item} id='0' >
//                     <input type="checkbox"  checked={filter === '0'} onChange={()=> setFilter('0')} />
//                     <p>Без пересадок</p>
//                 </div>
//                 <div className={classes.TransferBlock__Item} id='1'>
//                     <input type="checkbox"  checked={filter === '1'}  onChange={()=> setFilter('1')} />
//                     <p>1 пересадка</p>
//                 </div>
//                 <div className={classes.TransferBlock__Item} id='2'>
//                     <input type="checkbox"  checked={filter === '2'} value={'2'} onChange={()=> setFilter('2')} />
//                     <p>2 пересадки</p>
//                 </div>
//                 <div className={classes.TransferBlock__Item} id='3'>
//                     <input type="checkbox"  checked={filter === '3'} value={'3'} onChange={()=> setFilter('3')} />
//                     <p>3 пересадки</p>
//                 </div> 
//             </div>
//         </div>
//     );
// };

// export default TransferBlock;
import { FC } from "react";
import classes from './transferBlock.module.scss'
// import { $ticketsFilter } from "../../store/store";
import { useUnit } from "effector-react";
import { filterCanged } from "../../store/events";
import { $ticketsFilter } from "../../store/store";



const TransferBlock: FC= () => {

    const filter = useUnit($ticketsFilter)
    const handleFilterChange = useUnit(filterCanged)


    return (
        <div className={classes.TransferWrapper}>
            <h3 className={classes.TransferWrapper__Header}>Количество пересадок</h3>
            <div className={classes.TransferBlock}>
                <div className={classes.TransferBlock__Item} id='all'>
                    <input  type="checkbox" checked={filter === 'all'}  onChange={()=> handleFilterChange("all")}  />
                    <p>Все</p>
                </div>
                <div className={classes.TransferBlock__Item} id='0' >
                    <input type="checkbox" checked={filter === 'zero'}  onChange={()=> handleFilterChange("zero")} />
                    <p>Без пересадок</p>
                </div>
                <div className={classes.TransferBlock__Item} id='1'>
                    <input type="checkbox" checked={filter === '1'}  onChange={()=> handleFilterChange("1")} />
                    <p>1 пересадка</p>
                </div>
                <div className={classes.TransferBlock__Item} id='2'>
                    <input type="checkbox" checked={filter === '2'}  onChange={()=> handleFilterChange("2")} />
                    <p>2 пересадки</p>
                </div>
                <div className={classes.TransferBlock__Item} id='3'>
                    <input type="checkbox" checked={filter === '3'}  onChange={()=> handleFilterChange("3")} />
                    <p>3 пересадки</p>
                </div> 
            </div>
        </div>
    );
};

export default TransferBlock;