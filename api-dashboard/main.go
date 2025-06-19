package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {
	fmt.Print("Hello")
	http.HandleFunc("/assets.upload", handelUpload)
	http.HandleFunc("/person.create", createAPerson)
	http.HandleFunc("/tag.create", createATag)
	http.HandleFunc("/create.versions", createATag)
	http.ListenAndServe(":8080", nil)
}

func handelUpload(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "REQ Recived")
	reader, err := r.MultipartReader()
	if err != nil {
		http.Error(w, "Invalid multipart/form-data", http.StatusBadRequest)
		return
	}
	var tags []string
	var copyright string
	for {
		part, err := reader.NextPart()
		if err == io.EOF {
			break
		}
		if err != nil {
			http.Error(w, "Error reading part", http.StatusInternalServerError)
			return
		}

		name := part.FormName()
		if name == "file" && part.FileName() != "" {
			fileBytes, err := io.ReadAll(part)
			if err != nil {
				http.Error(w, "Error reading part", http.StatusInternalServerError)
			}
			fmt.Print(fileBytes)
		} else if name == "tag" {
			value, _ := io.ReadAll(part)
			tags = append(tags, string(value))

		} else if name == "copyright_holder_id" {
			value, _ := io.ReadAll(part)
			copyright = string(value)
		}
	}
	fmt.Print(tags, copyright)
}

func createAPerson(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, r)
}

func createATag(w http.ResponseWriter, r *http.Request) {}

func addImageToDatabase() {}
func checkIfImageIsInDatabase(imageData []byte) bool {
	return false
}
func checkIfTagIsInDatabase() {}
