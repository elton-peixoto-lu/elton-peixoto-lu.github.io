(ns core  (:require [reagent.core :as reagent]
                    [re-frame.core :as re-frame]))

;; Model
(defonce resume-state
         (re-frame/atom
           {:name "John Doe"
            :title "Software Developer"
            :contact-info "john.doe@example.com | (123) 456-7890 | www.johndoe.com"
            :summary "Experienced software developer with a passion for functional programming."
            :skills ["ClojureScript" "React" "HTML/CSS" "Functional Programming" "Web Development"]
            :experiences [{:title "Software Engineer"
                           :company "ABC Corp"
                           :date "January 2020 - Present"
                           :description "Developed web applications using ClojureScript and React. Collaborated with cross-functional teams to deliver high-quality software products."}
                          {:title "Junior Developer"
                           :company "XYZ Solutions"
                           :date "June 2018 - December 2019"
                           :description "Worked on frontend development projects using ClojureScript, HTML/CSS, and React. Assisted in troubleshooting and debugging issues."}]}))

;; Events
(re-frame.core/reg-event-db
  :initialize
  (fn [_ _]
      {:resume resume-state}))

;; Views
(defn view-experience [experience]
      [:div
       [:h1 (:title experience)]
       [:p (:date experience " - " (:company experience))]
       [:p (:description experience)]])

(defn view []
      (let [resume @resume-state]
           [:div
            [:h1 (:name resume)]
            [:p (:title resume)]
            [:p (:contact-info resume)]
            [:p (:summary resume)]
            [:h1 "Skills"]
            [:ul (map #(vector :li %) (:skills resume))]
            [:h1 "Experience"]
            (map view-experience (:experiences resume))]))

;; Subscriptions
(re-frame.core/reg-sub
  :resume
  (fn [db _]
      (:resume db)))

;; Main
(defn init! []
      (re-frame.core/dispatch [:initialize]))

(defn ^:export main []
      (reagent/render [view]
                      (.getElementById js/document "app")))