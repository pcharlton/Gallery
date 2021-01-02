package backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Artwork entity
 */
@Entity
@Table(name = "artworks")
public class Artwork {

	private long id;
	private String title;
	private String url;
	private String notes;

	public Artwork() {
	}
	
	public Artwork(String title, String url, String notes) {
		this.title = title;
		this.url = url;
		this.notes = notes;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "title", nullable = false)
	public String getTitle() {	return title; }
	public void setTitle(String title) { this.title = title; }
	
	@Column(name = "url", nullable = false)
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}

	@Column(name = "notes", nullable = false)
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}

	@Override
	public String toString() {
		return "Artwork [id=" + id + ", title=" + title + ", url=" + url + ", notes=" + notes + "]";
	}
	
}
