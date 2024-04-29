'use client'
import { useState, useEffect } from "react"

import Header from "@/components/Header"
import AddTask from "@components/AddTask"

export default function Home() {

  const [task, setTask] = useState("")

  //Loading qui va tourner lorsqu'on est entrain de charger les donnees.
  const [isLoading, setIsLoading] = useState(true)

  const handleCreateTask = async() => {
    setIsLoading(true)
    try {
      const response = await fetch("api/task/new", {
        method: 'POST',
        body: JSON.stringify({
          task:task
        })
      })
      if(response.ok) {
        setTask('')
      }
      else {
        console.log('Error')
      }
    }catch(error){
      console.log(error)
    }
    setIsLoading(false)
  }

  return (
    <>
      <Header />
      <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask} />
    </>
  )
}
