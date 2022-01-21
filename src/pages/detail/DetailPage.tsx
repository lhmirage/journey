import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom"

export const DetailPage: React.FC = () => {
  const params = useParams()
  const navigate = useNavigate()
  return (
    <div>
      <h1>路由路线详情页面，路线ID: {params.touristRouteId}</h1>
      <span>history: {console.log(navigate)}</span>
    </div>)
}
