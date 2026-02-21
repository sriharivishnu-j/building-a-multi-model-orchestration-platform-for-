package main

import (
    "log"
    "net/http"
)

func main() {
    http.HandleFunc("/process", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("Data processed"))
    })
    log.Fatal(http.ListenAndServe(":8080", nil))
}