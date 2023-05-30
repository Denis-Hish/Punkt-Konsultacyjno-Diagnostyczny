import Pagination from 'react-bootstrap/Pagination';

function PaginationComponent() {
   return (
      <Pagination className="justify-content-center mt-5">
         <Pagination.Prev />
         <Pagination.Item active>{1}</Pagination.Item>
         <Pagination.Item>{2}</Pagination.Item>
         <Pagination.Item>{3}</Pagination.Item>
         <Pagination.Item>{4}</Pagination.Item>
         <Pagination.Item>{5}</Pagination.Item>
         <Pagination.Next />
      </Pagination>
   );
}

export default PaginationComponent;
