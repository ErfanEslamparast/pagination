import _ from "lodash"
const Pagination = ({setPage,pages,activePage})=>{
    function numberToPersian(number) {
        const persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 
        8: '۸', 9: '۹' };
        number = number.toString().split('');
        let persianNumber = ''
        for (let i = 0; i < number.length; i++) {
             number[i] = persian[number[i]];
        }
        for (let i = 0; i < number.length; i++) {
             persianNumber += number[i];
        }
        return persianNumber;
   }

   const ChangePage =(side)=>{
    switch (side) {
        case 'prev':
            setPage((oldpage)=>{
                
                let prevouis= oldpage == 0 ? pages-1 : oldpage-1;
                
                return prevouis;
            })
            break;
            case 'next':
                setPage((oldpage)=>{
                    let next= oldpage == pages-1 ? 0 : oldpage+1;
                    return next;
                })
                break;
        
    }
   }
return (

<div className="pagination-wrapper w-auto d-flex justify-content-center mt-2 rounded-1 ">
  <ul className="pagination m-auto py-2 gap-2">
      <li className="page-item ms-1" onClick={()=>ChangePage('prev')}><a className="page-link rounded-1" href="#">قبلی</a></li>
   {
    _.times(pages,(index)=>{
        return(
        
        <li className={`page-item ${index==activePage ? 'active' : ''}`} key={index} onClick={()=>setPage(index)}>
            <a className="page-link" href="#">{numberToPersian(index+1)}</a>
        </li>
        
        )
    })
   }
    <li className="page-item me-1" onClick={()=>ChangePage('next')}><a className="page-link rounded-1" href="#">بعدی</a></li>
  </ul>
</div>


)
}
export default Pagination