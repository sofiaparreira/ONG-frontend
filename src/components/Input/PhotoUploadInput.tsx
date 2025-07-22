"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"


import { BiUpload } from "react-icons/bi"
import { FaCloudArrowUp, FaX } from "react-icons/fa6"

interface PhotoUploadInputProps {
  onFileChange?: (file: File | null) => void
}

export default function PhotoUploadInput({ onFileChange }: PhotoUploadInputProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileProcessing = useCallback(
    (file: File | null) => {
      setSelectedFile(file)
      onFileChange?.(file)
    },
    [onFileChange],
  )

  useEffect(() => {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile)
      setPreviewUrl(url)
      return () => URL.revokeObjectURL(url)
    } else {
      setPreviewUrl(null)
    }
  }, [selectedFile])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      handleFileProcessing(files[0])
    } else {
      handleFileProcessing(null)
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
    const files = event.dataTransfer.files
    if (files && files.length > 0) {
      handleFileProcessing(files[0])
    } else {
      handleFileProcessing(null)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
  }

  const handleRemoveFile = () => {
    handleFileProcessing(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = "" // Limpa o valor do input para permitir o re-upload do mesmo arquivo
    }
  }

  return (
    <div
      className={`w-full max-w-md p-4 border-2 rounded-2xl shadow-sm transition-colors",
        isDragging
          ? "border-blue-500 bg-gray-50 dark:bg-blue-950/50"
          : "border-dashed border-gray-300 border-dashed dark:border-gray-700",
      `}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center p-0">
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          className="sr-only" 
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        {previewUrl ? (
          <div className="relative w-full h-48 rounded-md overflow-hidden group">
            <Image
              src={previewUrl || "/placeholder.svg"}
              alt="Prévia da imagem"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <button
              className="absolute top-2 right-2 p-2 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              onClick={handleRemoveFile}
              aria-label="Remover imagem"
            >
              <FaX className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <label
            htmlFor="photo-upload"
            className="flex flex-col items-center justify-center w-full h-48 cursor-pointer text-gray-500 dark:text-gray-400"
          >
            <FaCloudArrowUp className="h-10 w-10 mb-2" />
            <p className="text-sm font-medium text-center">Arraste e solte sua foto aqui</p>
            <p className="text-xs text-center">ou</p>
            <button
              type="button"
              className="mt-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer text-sm font-medium bg-white text-gray-700 hover:ring hover:ring-indigo-600 duration-300 transition-all hover:bg-gray-50"
              onClick={() => fileInputRef.current?.click()}
            >
              Selecionar arquivo
            </button>
            <span className="sr-only">Clique para fazer upload de uma foto</span>
          </label>
        )}
      </div>
    </div>
  )
}
