package com.bnytechnology.backend.dto.request;

public class FaqRequest {
    private String question;
    public String getQuestion() { return question; }
    public void setQuestion(String question) { this.question = question; }
    private String answer;
    public String getAnswer() { return answer; }
    public void setAnswer(String answer) { this.answer = answer; }
    private String category;
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    private Integer displayOrder;
    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
