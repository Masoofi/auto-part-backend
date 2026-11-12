ALTER TABLE "Product"
ADD CONSTRAINT "Product_stock_nonnegative_check"
CHECK ("stock" >= 0);