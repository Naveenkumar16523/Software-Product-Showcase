import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";

export interface Testimonial {
  id: number;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  content: string;
  rating: number;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}

export function useTestimonials() {
  return useQuery<Testimonial[]>({
    queryKey: ["admin", "testimonials"],
    queryFn: async () => {
      const res = await apiFetch("/api/v1/testimonials");
      const json = await res.json();
      return json.content || json;
    },
  });
}
