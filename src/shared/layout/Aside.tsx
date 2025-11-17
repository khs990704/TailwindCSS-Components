// import file_thumbnail from 'src/assets/img/chatai/file_thumbnail.svg'
// import ic_trash from 'src/assets/img/icon/ic-trash.svg'
// import { shallowEqual } from 'react-redux'
// import { RootState } from 'src/app/store/redux/reduxStore.tsx'
// import {
//     useAppDispatch,
//     useAppSelector,
// } from 'src/app/store/redux/reduxHooks.tsx'
// import { chatAction } from 'src/features/chat/chatReducer.tsx'
// import {
//     buildDeleteFormData,
//     UploadItem,
// } from 'src/features/chat/components/file/fileType.tsx'
// import { UploadFileResponse } from 'src/features/chat/components/file/fileType.tsx'
// import { fileAction } from 'src/features/chat/components/file/fileReducer.tsx'
// import { clearAll } from 'src/features/chat/components/file/fileBuffer.tsx'
// import { selectedTotalFiles } from 'src/features/chat/chatSelectors.tsx'
// import AsideLoading from 'src/features/chat/components/loading/AsideLoading.tsx'
//
// const currentUserId = 'admin'
//
// const Aside = () => {
//     const { asideVisible, uploadedData, uploadLoading } = useAppSelector(
//         (state: RootState) => ({
//             asideVisible: state.chatReducer.asideVisible,
//             uploadedData: state.fileReducer.uploadedFiles
//                 ?.data as UploadFileResponse | null,
//             uploadLoading: state.fileReducer.uploadedFiles?.loading,
//             // currentUserId: state.fileReducer.currentUserId,
//         }),
//         shallowEqual,
//     )
//
//     const dispatch = useAppDispatch()
//
//     const channelId = uploadedData?.channelId ?? ''
//     const itemsCnt = (uploadedData?.items ?? []).length
//
//     const totalFiles = useAppSelector(selectedTotalFiles)
//
//     const handleReset = () => {
//         dispatch(chatAction.resetAllFilesList({}))
//         clearAll()
//         const items = uploadedData?.items ?? []
//         items.forEach((it) => {
//             dispatch(fileAction.deleteFileSn({ chataiFileSn: it.chataiFileSn }))
//             const fd = buildDeleteFormData(it, currentUserId, channelId)
//             dispatch(fileAction.deleteFile(fd))
//         })
//     }
//
//     return (
//         <aside
//             className={` ${
//                 asideVisible ? 'flex flex-col' : 'hidden'
//             } relative h-full w-[31rem] flex-[0_0_31rem] overflow-y-auto border-l border-[#EEE] bg-white shadow-[0_8px_20px_0_rgba(0,0,0,0.08)] dark:border-gray-700 dark:bg-gray-800 dark:shadow-none`}
//         >
//             <div className="flex items-center justify-between px-[1rem] pt-[1rem] pb-[1rem] pl-[2rem] dark:text-white">
//                 <h3 className="text-[1.6rem] font-[700]">첨부 파일</h3>
//                 <button
//                     onClick={() => {
//                         dispatch(chatAction.toggleAside({}))
//                     }}
//                     className="h-[4rem] w-[4rem] bg-[url('../assets/img/chatai/close_icon.svg')] bg-[length:2.5rem] bg-center bg-no-repeat dark:invert"
//                 ></button>
//             </div>
//
//             <ul className="flex-[1_1_auto] overflow-y-auto">
//                 {totalFiles > 0 && uploadLoading ? (
//                     <AsideLoading loading />
//                 ) : (
//                     uploadedData?.items?.map((item) => (
//                         <FileLi
//                             key={`file_${item.chataiFileSn}`}
//                             item={item}
//                             currentUserId={currentUserId}
//                             channelId={channelId}
//                         />
//                     ))
//                 )}
//             </ul>
//
//             <div className="flex items-center justify-between gap-[0.8rem] px-[1.6rem] py-[1rem]">
//                 <button
//                     onClick={() => {
//                         if (itemsCnt > 0 && uploadedData?.items) {
//                             dispatch(
//                                 chatAction.syncFilesFromUpload(
//                                     uploadedData.items,
//                                 ),
//                             )
//                         } else {
//                             dispatch(chatAction.resetAllFilesList({}))
//                             clearAll()
//                         }
//                         dispatch(chatAction.toggleFileSelectVisible({}))
//                     }}
//                     className="h-auto w-full cursor-pointer rounded-[0.4rem] border border-[#2970FF] bg-white py-[1.2rem] text-center text-[1.5rem] leading-[1.6rem] font-[600] text-[#2970FF] dark:border-blue-400 dark:bg-gray-700 dark:text-blue-400"
//                 >
//                     파일 추가
//                     <span className="pl-[0.5rem] text-[1.4rem] font-[400]">
//                         ({itemsCnt}/10 선택)
//                     </span>
//                 </button>
//
//                 <button
//                     onClick={handleReset}
//                     className="h-auto w-[36%] max-w-[12.9rem] cursor-pointer rounded-[0.4rem] border border-[#979797] bg-white px-[1.6rem] py-[1.2rem] text-center text-[1.5rem] leading-[1.6rem] font-[600] text-[#787878] dark:border-gray-500 dark:bg-gray-700 dark:text-gray-400"
//                 >
//                     초기화
//                 </button>
//             </div>
//         </aside>
//     )
// }
//
// export default Aside
//
// const FileLi = ({
//     item,
//     currentUserId,
//     channelId,
// }: {
//     item: UploadItem
//     currentUserId: string
//     channelId: string
// }) => {
//     const dispatch = useAppDispatch()
//
//     const handleDelete = () => {
//         const fd = buildDeleteFormData(item, currentUserId, channelId)
//         dispatch(fileAction.deleteFileSn({ chataiFileSn: item.chataiFileSn }))
//         dispatch(chatAction.refreshFileList(item))
//         dispatch(fileAction.deleteFile(fd))
//     }
//
//     return (
//         <li className="group flex h-[5.2rem] items-center gap-[1rem] border-b border-[#e4e4e4] px-[2rem] pt-[0.6rem] pb-[1rem] hover:bg-[#f1f1f1] dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
//             <i className="icon-file-thumbnail">
//                 <img src={file_thumbnail} alt="파일 썸네일" />
//             </i>
//             <span className="flex-1 overflow-hidden text-[1.4rem] text-ellipsis whitespace-nowrap">
//                 {item.orginlFileNm}
//             </span>
//
//             <button
//                 onClick={handleDelete}
//                 className="hidden p-[1rem] transition-all duration-200 group-hover:block"
//             >
//                 <i className="flex items-center justify-center">
//                     <img src={ic_trash} alt="휴지통" className="dark:invert" />
//                 </i>
//             </button>
//         </li>
//     )
// }
