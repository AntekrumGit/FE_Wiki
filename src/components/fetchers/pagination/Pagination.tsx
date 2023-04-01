/* .pagination {
  padding: 10px;
  margin: 15px 0;
  display: flex;
  justify-content: center;
}

.pagination > span {
  padding: 1px 3px;
  border: 1px solid rgb(211, 190, 190);
  cursor: pointer;
}

.pagination__disable {
  opacity: 0;
}

.pagination__selected {
  background-color: rgb(220, 220, 220);
} */

// import { useState } from "react";

// interface PaginationProps {
//   selectPage: (selectedPage: number) => void;
//   totalPages: number;
//   currentPage: number;
// }

// export const Pagination = ({
//   selectPage,
//   totalPages,
//   currentPage,
// }: PaginationProps) => {
//   const selectPageHandler = (selectedPage: number) => {
//     if (
//       selectedPage >= 1 &&
//       selectedPage <= totalPages &&
//       selectedPage !== currentPage
//     ) {
//       selectPage(selectedPage);
//     }
//   };

//   return (
//     <div>
//       {totalPages > 0 && (
//         <div className="pagination">
//           <span
//             onClick={() => selectPageHandler(currentPage - 1)}
//             className={currentPage > 1 ? "" : "pagination__disable"}
//           >
//             ◀
//           </span>
//           <div className="pagination__pages">
//             {[...Array(Math.floor(totalPages))].map((_, i) => {
//               return (
//                 <span
//                   key={i}
//                   className={
//                     currentPage === i + 1 ? "pagination__selected" : ""
//                   }
//                   onClick={() => selectPageHandler(i + 1)}
//                 >
//                   {i + 1}
//                 </span>
//               );
//             })}
//           </div>
//           <span
//             onClick={() => selectPageHandler(currentPage + 1)}
//             className={
//               currentPage < Math.floor(totalPages) ? "" : "pagination__disable"
//             }
//           >
//             ▶
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };
