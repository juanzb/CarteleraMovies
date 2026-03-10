import React from "react"
import { Route, Routes } from "react-router-dom"
import TopRated from "../Pages/TopRated"
import NowPlay from "../Pages/NowPlay"
import Popular from "../Pages/Popular"
import Upcoming from "../Pages/Upcoming"
import Search from "../Pages/Search"
import DetailsMovie from "../Pages/DetailsMovie"
import ScrollToTop from "./ScrollToTop"

const PathRender: React.FC = () => {
  return(
  <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Search />}></Route>
      <Route path="/TopRated" element={<TopRated />} />
      <Route path="/NowPlay" element={<NowPlay />} />
      <Route path="/Popular" element={<Popular />} />
      <Route path="/Upcoming" element={<Upcoming />} />
      <Route path="/movies/:id" element={<DetailsMovie />} />
    </Routes>
  </>
  )
}

export default PathRender
