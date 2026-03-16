"use client";

import { useState, useMemo } from "react";
import { ITEMS_PER_PAGE } from "@/lib/constants";

export function usePagination<T>(items: T[], perPage = ITEMS_PER_PAGE) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / perPage);

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, page, perPage]);

  const goTo = (p: number) => setPage(Math.max(1, Math.min(p, totalPages)));
  const next = () => goTo(page + 1);
  const prev = () => goTo(page - 1);

  return {
    page,
    totalPages,
    paginated,
    goTo,
    next,
    prev,
    hasNext: page < totalPages,
    hasPrev: page > 1,
    total: items.length,
  };
}
